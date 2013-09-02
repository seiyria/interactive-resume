
var CLR = {
	branch: "#b2b19d",
	lang: 	"orange",
	info: 	"#922E00",
	head: 	"#a7af00",
	root:   "red"
};

var NodeMaster = {
	nodes: {
		"kyle j. kemp": 				{color:CLR.root, shape:"dot", alpha:1, alwaysVisible: true}, 

			about: 						{color:CLR.head, shape:"dot", alpha:1, alwaysVisible: true}, 
				"21": 					{color:CLR.info,  alpha: 0, isLeaf: true},
				"software engineer": 	{color:CLR.info,  alpha: 0, isLeaf: true},
				"irc-aholic": 			{color:CLR.info,  alpha: 0, isLeaf: true},
				"rock climbing": 		{color:CLR.info,  alpha: 0, isLeaf: true},
				"wire flowers":			{color:CLR.info,  alpha: 0, isLeaf: true},
				"oshkosh, wi":			{color:CLR.info,  alpha: 0, isLeaf: true},

			contact: 					{color:CLR.head, shape: "dot", alpha:1, alwaysVisible: true},
				"email": 				{color:CLR.info,  alpha: 0, isLeaf: true, link: "mailto: kyle@seiyria.com"},
				"twitter": 				{color:CLR.info,  alpha: 0, isLeaf: true, link: "https://twitter.com/seiyria"},
				"linkedin": 			{color:CLR.info,  alpha: 0, isLeaf: true, link: "http://www.linkedin.com/in/seiyria"},
				"skype": 				{color:CLR.info,  alpha: 0, isLeaf: true, link: "skype: raruvth"},
				"github": 				{color:CLR.info,  alpha: 0, isLeaf: true, link: "https://github.com/seiyria"},

			"r\u00E9sum\u00E9":			{color:CLR.head, shape: "dot", alpha:1, alwaysVisible: true},

				"c#": 					{color:CLR.lang, shape: "dot", alpha: 0},	
					"mvc": 				{color:CLR.doc,  alpha: 0, isLeaf: true, link: "http://www.asp.net/mvc"},
					"webapi": 			{color:CLR.doc,  alpha: 0, isLeaf: true, link: "http://www.asp.net/web-api"},
					"xna": 				{color:CLR.doc,  alpha: 0, isLeaf: true, link: "http://en.wikipedia.org/wiki/Microsoft_XNA"},

				"java": 				{color:CLR.lang, shape: "dot", alpha: 0},
					"pircbotx": 		{color:CLR.info,  alpha: 0, isLeaf: true, link: "https://lang.google.com/p/pircbotx/"},
					"lombok": 			{color:CLR.info,  alpha: 0, isLeaf: true, link: "http://projectlombok.org/"},
					"android": 			{color:CLR.info,  alpha: 0, isLeaf: true, link: "http://www.android.com/"},
					"ant": 				{color:CLR.info,  alpha: 0, isLeaf: true, link: "http://ant.apache.org/"},

				"javascript":			{color:CLR.lang, shape: "dot", alpha: 0},
					"phantomjs": 		{color:CLR.info,  alpha: 0, isLeaf: true, link: "http://phantomjs.org/"},
					"casperjs":			{color:CLR.info,  alpha: 0, isLeaf: true, link: "http://casperjs.org/"},
					"jquery":			{color:CLR.info,  alpha: 0, isLeaf: true, link: "http://jquery.com/"},
					"knockout.js":		{color:CLR.info,  alpha: 0, isLeaf: true, link: "http://knockoutjs.com/"},
					"arbor.js":			{color:CLR.info,  alpha: 0, isLeaf: true, link: "http://arborjs.org/"},
					"google apps":		{color:CLR.info,  alpha: 0, isLeaf: true, link: "https://developers.google.com/apps-script/"},
					"node.js":			{color:CLR.info,  alpha: 0, isLeaf: true, link: "http://nodejs.org/"},
					"html5 canvas":		{color:CLR.info,  alpha: 0, isLeaf: true, link: "https://developer.mozilla.org/en-US/docs/HTML/Canvas"},

				"python":				{color:CLR.lang, shape: "dot", alpha: 0},
					"sublime text plugin":		{color:CLR.info,  alpha: 0, isLeaf: true, link: "http://www.sublimetext.com/"},
					"web2py": 			{color:CLR.info,  alpha: 0, isLeaf: true, link: "http://lesscss.org/"},

				"php":					{color:CLR.info, shape: "dot", alpha: 0},

				"html":					{color:CLR.info, shape: "dot", alpha: 0},

				"css": 					{color:CLR.lang, shape: "dot", alpha: 0},
					"less": 			{color:CLR.info,  alpha: 0, isLeaf: true, link: "http://lesscss.org/"},
					"bootstrap":		{color:CLR.info,  alpha: 0, isLeaf: true, link: "http://getbootstrap.com/"},

				"sql": 					{color:CLR.lang, shape: "dot", alpha: 0},
					"mariadb": 			{color:CLR.info,  alpha: 0, isLeaf: true, link: "https://mariadb.org/"},
					"mysql": 			{color:CLR.info,  alpha: 0, isLeaf: true, link: "http://www.mysql.com/"},
					"mssql": 			{color:CLR.info,  alpha: 0, isLeaf: true, link: "http://www.microsoft.com/sqlserver/"},
					"sqlite": 			{color:CLR.info,  alpha: 0, isLeaf: true, link: "http://www.sqlite.org/"},
					"derby": 			{color:CLR.info,  alpha: 0, isLeaf: true, link: "http://db.apache.org/derby/"},

				"vcs":					{color:CLR.lang, shape: "dot", alpha: 0},
					"svn": 				{color:CLR.info,  alpha: 0, isLeaf: true, link: "http://subversion.tigris.org/"},
					"hg": 				{color:CLR.info,  alpha: 0, isLeaf: true, link: "http://mercurial.selenic.com/"},
					"git": 				{color:CLR.info,  alpha: 0, isLeaf: true, link: "http://git-scm.com/"},

				"editors": 				{color:CLR.lang, shape: "dot", alpha: 0},
					"eclipse": 			{color:CLR.info,  alpha: 0, isLeaf: true, link: "http://www.eclipse.org/"},
					"visual studio": 	{color:CLR.info,  alpha: 0, isLeaf: true, link: "http://www.microsoft.com/visualstudio/"},
					"sublime text": 	{color:CLR.info,  alpha: 0, isLeaf: true, link: "http://www.sublimetext.com/"},
					"notepad++": 		{color:CLR.info,  alpha: 0, isLeaf: true, link: "http://notepad-plus-plus.org/"},

				"scripting":			{color:CLR.lang, shape: "dot", alpha: 0},
					"bash": 			{color:CLR.info,  alpha: 0, isLeaf: true, link: "http://en.wikipedia.org/wiki/Bash_(Unix_shell)"},
					"batch": 			{color:CLR.info,  alpha: 0, isLeaf: true, link: "http://en.wikipedia.org/wiki/Batch_file"},
					"powershell":		{color:CLR.info,  alpha: 0, isLeaf: true, link: "http://en.wikipedia.org/wiki/Windows_PowerShell"},

			projects: 					{color:CLR.head, shape: "dot", alpha:1, alwaysVisible: true},
				"vivio": 				{color:CLR.info,  alpha: 0, isLeaf: true, link: "https://github.com/seiyria/vivio"},
				"tekdice": 				{color:CLR.info,  alpha: 0, isLeaf: true, link: "http://tekdice.com"},
				"tekalyze": 			{color:CLR.info,  alpha: 0, isLeaf: true, link: "http://tekalyze.com"},
				"kellyirc": 			{color:CLR.info,  alpha: 0, isLeaf: true, link: "https://github.com/seiyria/kEllyIRC"},
				"word soup": 			{color:CLR.info,  alpha: 0, isLeaf: true, link: "https://github.com/seiyria/idlemaster"},
				"sublime dreams":		{color:CLR.info,  alpha: 0, isLeaf: true, link: "https://github.com/seiyria/sublime-dreams"},
				"bootstrap slider":		{color:CLR.info,  alpha: 0, isLeaf: true, link: "https://github.com/seiyria/bootstrap-slider"},
	},

	edges: {
		"kyle j. kemp": {
			about: 					{length:5.3},
			contact: 				{length:3.9},
			"r\u00E9sum\u00E9": 	{length:6.5},
			projects: 				{length:4.7},
		},

		about: {
			"21": 					{length: 3.2},
			"software engineer": 	{length: 5.8},
			"irc-aholic": 			{length: 3.9},
			"rock climbing": 		{length: 3.7},
			"wire flowers": 		{length: 3.2},
			"oshkosh, wi": 			{length: 4.6},
		},

		contact: {
			"email": 				{length: 5.9},
			"skype": 				{length: 3.7},
			"linkedin": 			{length: 4.7},
			"twitter": 				{length: 5.3},
			"github": 				{length: 6.3},
		},

		projects: {
			"vivio": 				{length: 4.5},
			"tekdice": 				{length: 6.6},
			"tekalyze": 			{length: 5.2},
			"kellyirc": 			{length: 4.0},
			"word soup": 			{length: 3.7},
		},

		"r\u00E9sum\u00E9": {
			"c#": 					{length: 5.7},
			"css": 					{length: 4.5},
			"editors": 				{length: 5.3},
			"html": 				{length: 5.9},
			"java": 				{length: 5.0},
			"javascript":			{length: 7.2},
			"php": 					{length: 3.7},
			"python": 				{length: 3.3},
			"scripting":			{length: 5.2},
			"sql": 					{length: 4.7},
			"vcs": 					{length: 6.5},
		},

		"c#": {
			"mvc": 					{length: 5.8},
			"webapi": 				{length: 4.5},
			"xna": 					{length: 4.0},
		},

		"css": {
			"less": 				{length: 4.7},
			"bootstrap": 			{length: 5.0},
		},

		"editors": {
			"eclipse": 				{length: 4.4},
			"visual studio": 		{length: 5.6},
			"sublime text": 		{length: 7.2},
			"notepad++": 			{length: 3.4},
		},

		"java": {
			"pircbotx": 			{length: 6.8},
			"lombok": 				{length: 5.7},
			"android": 				{length: 4.3},
			"ant": 					{length: 4.9},
		},

		"javascript": {
			"phantomjs": 			{length: 4.6},
			"casperjs":				{length: 4.4},
			"jquery":				{length: 6.8},
			"knockout.js":			{length: 7.4},
			"arbor.js":				{length: 4.2},
			"google apps":			{length: 3.9},
			"node.js":				{length: 5.1},
			"html5 canvas":			{length: 5.6},
		},

		"python": {
			"sublime text plugin":	{length: 4.9},
			"web2py": 				{length: 4.2},
		},

		"scripting": {
			"bash": 				{length: 4.6},
			"batch": 				{length: 4.0},

		},

		"sql": {
			"mariadb": 				{length: 6.4},
			"mysql": 				{length: 5.9},
			"mssql": 				{length: 3.5},
			"sqlite": 				{length: 3.9},
			"derby": 				{length: 4.3},
		},

		"vcs": {
			"svn": 					{length: 5.3},
			"hg": 					{length: 4.6},
			"git": 					{length: 6.5},
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