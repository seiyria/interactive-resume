
function addStarToPage(star) {

	$(".column:not(#userInfo>.column)").empty();

	$("#content").removeClass('hidden');

	$("#userInfo .table td[id*='main']").each(function() {
		var attr = $(this).attr('id').substring(5);
		$(this).text(star.user[attr]);
	});


	for(var cat in star.classes) {
		if(typeof star.classes[cat] == "function") continue;

		var $root = $("<div/>").addClass('portlet');

		var $content = $("<div/>").addClass('portlet-content').append("<table class='table table-condensed'></table>");

		var isComplete = star.classes[cat]["isComplete"];

		//classes taken block
		var classesTaken = star.classes[cat]["classes"]["classesTaken"];

		var hasClass = false;

		classesTaken.sort(function(a,b) {
			return a.classId.localeCompare(b.classId);
		});

		if(typeof classesTaken != 'undefined') {
			for(var x in classesTaken) {
				if(typeof classesTaken[x] == 'function') continue;
				hasClass = true;
				var curClass = classesTaken[x];

				var catTooltip = "<a title='"+parseDepartment(curClass.classId)+"' href='#' rel='tooltip'>"+curClass.classId+"</a>";

				var classTooltip = "<a title='"+buildClassTooltip(curClass)+"' href='#' rel='tooltip'>"+curClass.className+"</a>";

				var trClass = determineClass(curClass);

				$content.find(".table").append("<tr class='"+trClass+"'><td class='"+curClass.classId+"'>"+catTooltip+"</td><td>"+classTooltip+"</td></tr>");
			}
		}
		//--

		if(!hasClass) continue;

		if(cat.indexOf("GENERAL") != -1) {
			$root.appendTo("#genEds .column");
		} else if(cat.indexOf("REQUIREMENT") != -1) {
			$root.appendTo("#otherEds .column");
		} else {
			$root.appendTo("#degree .column");
		}

		$root.append("<div class='portlet-header'>"+cat+"</div>");
		$content.appendTo($root);

		if(isComplete)
			$root.find(".portlet-header").addClass('complete');

		else {
			var classesAvailable = star.classes[cat]["classes"]["classesAvailable"];

			if(classesAvailable) {
				$requirementsTable = $("<table/>").addClass('table').addClass('table-condensed').append("<caption>Additional Requirements</caption>");
				var doAppend = false;
				$.each(classesAvailable, function(i,e) {
					var classes = [];
					if(!e.hasOwnProperty("classes") || !e.hasOwnProperty("need") || typeof e.need == 'undefined' || e.classes.length == 0) return;
					doAppend = true;
					var string = e.need+"<br />";
					$.each(e.classes, function(ii, ee) {
						classes.push(e.classes[ii]);
					});
					$requirementsTable.append("<tr><td></td><td>"+string+classes.join(", ").split(", OR,").join(" OR ")+"</td></tr>");
				});
				if(doAppend) {
					$content.append("<br>");
					$content.append($requirementsTable);
				}
			}
		}
	}

	$("#userInfo .portlet-content").show();	

	$("a[rel='tooltip']").tooltip();

}

function determineClass(classObj) {
	if(classObj.grade == "I") return "warning";
	if(classObj.grade == "F") return "error";
	if(classObj.grade == "IP") return "info";
	return "";
}

function parseDepartment(classId) {
	return departments[classId.substring(0,classId.indexOf("-"))];
}

function buildClassTooltip(classObj) {
	return classObj.gradePoints == ".00" && classObj.grade != "S" ? 

		classObj.grade == "I" ? 

			"This "+classObj.credits+" credit course is incomplete." :

				classObj.grade == "F" ?

					"You failed this course." :

			"You are currently taking this "+classObj.credits+" credit course." :

		classObj.grade == "S" ? 
			"This course transferred in for "+classObj.credits+" credits." :		

			"You took this "+classObj.credits+" credit course in the "+classObj.termTaken+" "+classObj.yearTaken + " year and got a "+classObj.grade+" which was worth "+classObj.gradePoints+" grade points.";
}