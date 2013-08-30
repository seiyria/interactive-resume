<head>
	<title><? echo getPlace(); ?></title>
	<link rel="stylesheet" type="text/css" href="styles.css" />
	<link rel="stylesheet" href="colorbox.css" />
	<link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
	<script src="http://code.jquery.com/jquery-1.7.min.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
	<script src="jquery.colorbox-min.js"></script>
	<script type="text/javascript" src="sliding_effect.js"></script>
	<script src="accordion.js"></script>
	<script>
		$(document).ready(function(){
			$(".inline").colorbox({inline:true, width:"1110px", height:"90%"});
		});
	</script>
</head>

<?
function getPlace() {
	switch(basename($_SERVER['PHP_SELF'])) {
		case "about.php": return "seiyria.com - About Me";
		case "idle.php": return "seiyria.com - IdleMaster";
		case "index.php": return "seiyria.com - Home";
		case "contact.php": return "seiyria.com - Contact Me";
		case "vivio.php": return "seiyria.com - Vivio";
		case "kirc.php": return "seiyria.com - kEllyIRC";
		default: return "seiyria.com";
	}
}
?>