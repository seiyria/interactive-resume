

//remove all of the empty strings from the array
Array.prototype.reduceSelf = function() {
	var ret = [];
	this.forEach(function(value) {
		if(value != '') ret.push(value.trim());
	});
	return ret;
}

//find a line in an array so I don't have to rely on specific indices
Array.prototype.findLineThatHas = function(needle) {
	var idx;
	this.forEach(function(value, index) {
		if(value.indexOf(needle) != -1) { idx = index; return; }
	});
	return idx;
}

//string.startsWith
String.prototype.startsWith = function(needle) {
    return(this.indexOf(needle) == 0);
};

//split up a string into x args
String.prototype.getArgs = function(split, args) {
	var temp = this.split(split).reduceSelf();
	var rVal = [];

	for(var i=0; i<args; i++){
		rVal[i] = temp[i];
	}

	rVal[args-1] = this.substring(this.lastIndexOf(temp[args-1]));

	return rVal;
};

//***************************
//	global vars
//***************************

var legend;
var departments;

//***************************
// general report functions
//***************************

function getStarWrapper(report) {
	try {
		return getAllReportData(report);
	} catch(err) {
		alert("It appears as though an error happened. Please check your console.");
		console.error(err);
	}
}

function getAllReportData(report) {
	var sections = getSections(report);

	legend = buildLegend(sections[sections.length-3]);
	departments = buildDepartments(sections[sections.length-2]);

	var user = getUserInfo(sections[0]);
	user = getMoreUserInfo(sections[1], user);

	var report = {
		user: user,
		classes: getAllClasses(sections)
	}

	return report;
}

function getSections(report) {
	return report.split("=================================================================");
}

//***************************
// user functions
//***************************

function getUserInfo(section) {

	section = section.split("\n").reduceSelf();

	var preparedLine = section.findLineThatHas("PREPARED");

	var user = {
		prepared: 	section[preparedLine].substring(section[preparedLine].indexOf(":")+2).trim(),
		name: 		parseName(section[preparedLine+1]),
		degree: 	section[section.findLineThatHas("CAMPUS ID")+1],
		major: 		section[section.findLineThatHas("CAMPUS ID")+2]
	}

	return user;
}

function getMoreUserInfo(section, user) {
	section = section.split("\n").reduceSelf();

	var advisorLine = section[section.findLineThatHas("ADVISOR")];
	var uwofficial  = section[section.findLineThatHas("UWO OFFICIAL")].split("   ").reduceSelf();

	user["advisor"] = 	parseName(advisorLine.substring(advisorLine.indexOf(":")+2).split("   ")[0]);
	user["plan"] = 		section[section.findLineThatHas("PLAN")].split("  ").reduceSelf()[2];
	user["standing"] =	section[section.findLineThatHas("ACADEMIC STANDING")].split(" : ")[1];
	user["gpa"] = 		uwofficial[3];
	user["credits"] =	uwofficial[4];

	return user;
}

function parseName(name) {
	if(name.indexOf(",") == -1) return name;
	var arr = name.split(",");
	return arr[1]+" "+arr[0];
}

//***************************
// class functions
//***************************

function getAllClasses(sections) {
	var classGroups = [];
	$.each(sections, function(i, e) {

		if(e.indexOf("NO ") != -1) 
			e = e.substring(e.indexOf("NO "));

		if(e.indexOf("OK ") != -1) 
			e = e.substring(e.indexOf("OK "));

		e = e.trim().split("\n").reduceSelf();

		if(e[0].startsWith("NO") || e[0].startsWith("OK")) {
			var cat = e[0].getArgs("  ",2);
			classGroups[cat[1].substring(0, cat[1].lastIndexOf("(")).trim()] = {
				isComplete: cat[0]=="OK",
				classes: parseClassSection(e)
			};
		} else if(e[0].indexOf("WHICH APPLY TO") != -1) {
			var cat = e[0];
			classGroups[cat] = {
				isComplete: true,
				classes: parseClassSection(e)
			};
		}
	});
	return classGroups;
}

function parseClassSection(section) {
	var classSection = {};
	var classes = [];

	var parsing = false;
	var selecting = false;
	var selbuf = '';
	var needObj = {};

	classSection["classesTaken"] = [];
	classSection["classesAvailable"] = [];

	$.each(section, function(i, e) {

		if(e.trim() == "") {
			parsing = false;
			selecting = false;

			needObj["classes"]=selbuf.substring(selbuf.indexOf("SELECT")+12).split(" ").reduceSelf();

			classSection["classesAvailable"].push(needObj);

			selbuf = '';
			needObj = {};
		}

		$.each(legend, function(ii, ee) {
			if(e.startsWith(ee)) {
				parsing = true;
			}
			if(e.startsWith("NEEDS")) {
				needObj["need"] = e.split("   ").reduceSelf()[1] + " FROM:";
			}
			if(e.startsWith('SELECT FROM')) {
				selecting = true;
			}
		});

		var firstToken = parseInt(e.split(" ")[0]);
		if(!isNaN(firstToken) && firstToken > 500) {
			var newClass = parseClass(e);
			var canPush = true;

			for(var obj in classSection["classesTaken"]) {
				obj = classSection["classesTaken"][obj];
				if(obj.hasOwnProperty("classId") && obj.classId == newClass.classId && obj.grade == newClass.grade) {
					canPush = false;
				}
			}

			if(canPush)
				classSection["classesTaken"].push(newClass);
		}

		if(!parsing) return;

		if(selecting) {
			selbuf += " " + e;
		} 

	});
	return classSection;
}

function determineTerm(term) {
	return term=="1" ? "Fall" : term=="2" ? "Spring" : "Summer";
}

function parseClass(classLine) {
	var classData = classLine.split(" ").reduceSelf();
	var className = classLine.substring(classLine.indexOf(classData[5])).replace("OTHR - TRN -", "[Transfer]").replace("IP ",'');
	var yearTaken = parseInt("20"+classData[0].substring(0,2));
	return {
		classId: 		classData[1],
		credits:  		classData[2],
		grade: 			classData[4] == "IP" ? classData[4] : classData[3],
		gradePoints: 	classData[4] == "IP" ? classData[3] : classData[4],
		className: 		className,
		yearTaken:  	yearTaken+"-"+(yearTaken+1),
		termTaken: 		determineTerm(classData[0].substring(3))
	};
}

//***************************
// global functions
//***************************

function buildLegend(legend) {
	var chars ='';
	legend = legend.split("\n").reduceSelf();
	var end=false;
	$.each(legend, function(i, e) {
		if(end) return;
		if(e.indexOf("=") != -1) {
			chars += e + "\n";
		}
		if(e.indexOf("******") != -1) end=true;
	});

	chars = chars.split(/  |\n/).reduceSelf();

	var legend = [];

	$.each(chars, function(i, e) {
		if(e.indexOf("=") == -1) return;
		legend.push(e.split("=")[0].trim());
	});
	return legend;
}

function buildDepartments(depts) {
	depts = depts.substring(depts.indexOf("DEPARTMENT CONVERSION TABLE")).split("\n").reduceSelf();

	var allDepts = [];

	$.each(depts, function(i, e) {
		if(e.indexOf("      ") == -1) return;
		var twoDepts = e.split("  ").reduceSelf();

		allDepts[twoDepts[1]]=twoDepts[0];
		allDepts[twoDepts[3]]=twoDepts[2];
	});

	return allDepts;
}