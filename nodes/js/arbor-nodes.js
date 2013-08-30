
var CLR = {
	branch:"#b2b19d",
	code:"orange",
	doc:"#922E00",
	demo:"#a7af00"
};

var NodeMaster = {
	nodes: {
		"kyle j. kemp": 				{color:"red", shape:"dot", alpha:1, alwaysVisible: true}, 

			about: 						{color:CLR.demo, shape:"dot", alpha:1, alwaysVisible: true}, 
				"21": 					{color:CLR.doc,  alpha: 0, isLeaf: true},
				"software engineer": 	{color:CLR.doc,  alpha: 0, isLeaf: true},
				"irc-aholic": 			{color:CLR.doc,  alpha: 0, isLeaf: true},
				"rock climbing": 		{color:CLR.doc,  alpha: 0, isLeaf: true},
				"wire flowers":			{color:CLR.doc,  alpha: 0, isLeaf: true},
				"oshkosh, wi":			{color:CLR.doc,  alpha: 0, isLeaf: true},

			contact: 					{color:CLR.demo, shape: "dot", alpha:1, alwaysVisible: true},
				"email": 				{color:CLR.doc,  alpha: 0, isLeaf: true, link: "mailto: kyle@seiyria.com"},
				"twitter": 				{color:CLR.doc,  alpha: 0, isLeaf: true, link: "https://twitter.com/seiyria"},
				"linkedin": 			{color:CLR.doc,  alpha: 0, isLeaf: true, link: "http://www.linkedin.com/in/seiyria"},
				"skype": 				{color:CLR.doc,  alpha: 0, isLeaf: true, link: "skype: raruvth"},
				"github": 				{color:CLR.doc,  alpha: 0, isLeaf: true, link: "https://github.com/seiyria"},

			"r\u00E9sum\u00E9":			{color:CLR.demo, shape: "dot", alpha:1, alwaysVisible: true},

				"c#": 					{color:CLR.code, shape: "dot", alpha: 0},
					"mvc": 				{color:CLR.doc,  alpha: 0, isLeaf: true},
					"webforms": 		{color:CLR.doc,  alpha: 0, isLeaf: true},
					"webapi": 			{color:CLR.doc,  alpha: 0, isLeaf: true},
					"xna": 				{color:CLR.doc,  alpha: 0, isLeaf: true},

				"java": 				{color:CLR.code, shape: "dot", alpha: 0},
					"pircbotx": 		{color:CLR.doc,  alpha: 0, isLeaf: true, link: "https://code.google.com/p/pircbotx/"},
					"lombok": 			{color:CLR.doc,  alpha: 0, isLeaf: true, link: "http://projectlombok.org/"},
					"android": 			{color:CLR.doc,  alpha: 0, isLeaf: true, link: "http://www.android.com/"},
					"ant": 				{color:CLR.doc,  alpha: 0, isLeaf: true, link: "http://ant.apache.org/"},

				"javascript":			{color:CLR.code, shape: "dot", alpha: 0},
					"phantomjs": 		{color:CLR.doc,  alpha: 0, isLeaf: true, link: "http://phantomjs.org/"},
					"casperjs":			{color:CLR.doc,  alpha: 0, isLeaf: true, link: "http://casperjs.org/"},
					"jquery":			{color:CLR.doc,  alpha: 0, isLeaf: true, link: "http://jquery.com/"},
					"knockout.js":		{color:CLR.doc,  alpha: 0, isLeaf: true, link: "http://knockoutjs.com/"},
					"arbor.js":			{color:CLR.doc,  alpha: 0, isLeaf: true, link: "http://arborjs.org/"},
					"google apps":		{color:CLR.doc,  alpha: 0, isLeaf: true, link: "https://developers.google.com/apps-script/"},
					"node.js":			{color:CLR.doc,  alpha: 0, isLeaf: true, link: "http://nodejs.org/"},

				"python":				{color:CLR.code, shape: "dot", alpha: 0},
					"sublime text":		{color:CLR.doc,  alpha: 0, isLeaf: true, link: "http://www.sublimetext.com/"},
					"web2py": 			{color:CLR.doc,  alpha: 0, isLeaf: true, link: "http://lesscss.org/"},

				"php":					{color:CLR.code, shape: "dot", alpha: 0},

				"html":					{color:CLR.code, shape: "dot", alpha: 0},

				"css": 					{color:CLR.code, shape: "dot", alpha: 0},
					"less": 			{color:CLR.doc,  alpha: 0, isLeaf: true, link: "http://lesscss.org/"},
					"bootstrap":		{color:CLR.doc,  alpha: 0, isLeaf: true, link: "http://getbootstrap.com/"},

				"sql": 					{color:CLR.code, shape: "dot", alpha: 0},
					"mariadb": 			{color:CLR.doc,  alpha: 0, isLeaf: true, link: "https://mariadb.org/"},
					"mysql": 			{color:CLR.doc,  alpha: 0, isLeaf: true, link: "http://www.mysql.com/"},
					"mssql": 			{color:CLR.doc,  alpha: 0, isLeaf: true, link: "http://www.microsoft.com/sqlserver/"},
					"sqlite": 			{color:CLR.doc,  alpha: 0, isLeaf: true, link: "http://www.sqlite.org/"},
					"derby": 			{color:CLR.doc,  alpha: 0, isLeaf: true, link: "http://db.apache.org/derby/"},

				"vcs":					{color:CLR.code, shape: "dot", alpha: 0},
					"svn": 				{color:CLR.doc,  alpha: 0, isLeaf: true, link: "http://subversion.tigris.org/"},
					"hg": 				{color:CLR.doc,  alpha: 0, isLeaf: true, link: "http://mercurial.selenic.com/"},
					"git": 				{color:CLR.doc,  alpha: 0, isLeaf: true, link: "http://git-scm.com/"},

				"editors": 				{color:CLR.code, shape: "dot", alpha: 0},
					"eclipse": 			{color:CLR.doc,  alpha: 0, isLeaf: true, link: "http://www.eclipse.org/"},
					"visual studio": 	{color:CLR.doc,  alpha: 0, isLeaf: true, link: "http://www.microsoft.com/visualstudio/"},
					"sublime text": 	{color:CLR.doc,  alpha: 0, isLeaf: true, link: "http://www.sublimetext.com/"},
					"notepad++": 		{color:CLR.doc,  alpha: 0, isLeaf: true, link: "http://notepad-plus-plus.org/"},

				"scripting":			{color:CLR.code, shape: "dot", alpha: 0},
					"bash": 			{color:CLR.doc,  alpha: 0, isLeaf: true},
					"batch": 			{color:CLR.doc,  alpha: 0, isLeaf: true},

			projects: 					{color:CLR.demo, shape: "dot", alpha:1, alwaysVisible: true},
				"vivio": 				{color:CLR.doc,  alpha: 0, isLeaf: true, link: "https://github.com/seiyria/vivio"},
				"tekdice": 				{color:CLR.doc,  alpha: 0, isLeaf: true, link: "http://tekdice.com"},
				"tekalyze": 			{color:CLR.doc,  alpha: 0, isLeaf: true, link: "http://tekalyze.com"},
				"kellyirc": 			{color:CLR.doc,  alpha: 0, isLeaf: true, link: "https://github.com/seiyria/kEllyIRC"},
				"word soup": 			{color:CLR.doc,  alpha: 0, isLeaf: true, link: "https://github.com/seiyria/idlemaster"},
				"sublime dreams":		{color:CLR.doc,  alpha: 0, isLeaf: true, link: "https://github.com/seiyria/sublime-dreams"},
				"bootstrap slider":		{color:CLR.doc,  alpha: 0, isLeaf: true, link: "https://github.com/seiyria/bootstrap-slider"},
	},

	edges: {
		"kyle j. kemp": {
			about: 					{length:2},
			contact: 				{length:3},
			"r\u00E9sum\u00E9": 	{length:6},
			projects: 				{length:3},
		},

		about: {
			"21": 					{length: 3},
			"software engineer": 	{length: 5},
			"irc-aholic": 			{length: 3},
			"rock climbing": 		{length: 2},
			"wire flowers": 		{length: 2},
			"oshkosh, wi": 			{length: 4},
		},

		contact: {
			"email": 				{length: 5},
			"skype": 				{length: 2},
			"linkedin": 			{length: 4},
			"twitter": 				{length: 5},
			"github": 				{length: 5},
		},

		projects: {
			"vivio": 				{length: 2},
			"tekdice": 				{length: 4},
			"tekalyze": 			{length: 3},
			"kellyirc": 			{length: 4},
			"word soup": 			{length: 2},
		},

		"r\u00E9sum\u00E9": {
			"c#": 					{length: 5},
			"css": 					{length: 3},
			"editors": 				{length: 5},
			"html": 				{length: 5},
			"java": 				{length: 5},
			"javascript":			{length: 7},
			"php": 					{length: 3},
			"python": 				{length: 3},
			"scripting":			{length: 5},
			"sql": 					{length: 4},
			"vcs": 					{length: 5},
		},

		"c#": {
			"mvc": 					{length: 5},
			"webforms": 			{length: 4},
			"webapi": 				{length: 4},
			"xna": 					{length: 4},
		},

		"css": {
			"less": 				{length: 3},
			"bootstrap": 			{length: 3},
		},

		"editors": {
			"eclipse": 				{length: 4},
			"visual studio": 		{length: 5},
			"sublime text": 		{length: 7},
			"notepad++": 			{length: 3},
		},

		"java": {
			"pircbotx": 			{length: 4},
			"lombok": 				{length: 3},
			"android": 				{length: 2},
			"ant": 					{length: 3},
		},

		"javascript": {
			"phantomjs": 			{length: 4},
			"casperjs":				{length: 4},
			"jquery":				{length: 6},
			"knockout.js":			{length: 6},
			"arbor.js":				{length: 4},
			"google apps":			{length: 3},
			"node.js":				{length: 4},
		},

		"python": {
			"sublime text":			{length: 4},
			"web2py": 				{length: 3},
		},

		"scripting": {
			"bash": 				{length: 3},
			"batch": 				{length: 3},

		},

		"sql": {
			"mariadb": 				{length: 5},
			"mysql": 				{length: 4},
			"mssql": 				{length: 2},
			"sqlite": 				{length: 2},
			"derby": 				{length: 3},
		},

		"vcs": {
			"svn": 					{length: 4},
			"hg": 					{length: 3},
			"git": 					{length: 5},
		},
	}
};

var nodeNames = 
	$.map(
		$.grep(
			$.map(NodeMaster.nodes, 
				function(e, i) { 
					return {name: i, data: e}; 
				}), 
			function(e, i) { 
				return !e.data.isLeaf 
			}),
		function(e, i) {
			return e.name;
		});