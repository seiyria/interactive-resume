<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
	<head>
		<title>Word Soup Information</title>
		<link rel="stylesheet" type="text/css" href="../css/old_styles.css" />
		<link rel="stylesheet" href="colorbox.css" />
		
		<script src="//code.jquery.com/jquery.min.js"></script>
		<script src="jquery.colorbox-min.js"></script>
		<script src="../js/accordion.js"></script>
		<script>
			$(document).ready(function(){
				$(".inline").colorbox({inline:true, width:"1110px", height:"90%"});
			});
		</script>
	</head>
	<body>
		<div id="content-block-nopad">
			<div id="wrapper">
				<div class="accordionButton">Game Information</div>
				<div class="accordionContent"><? include('information.php'); ?></div>
				<div class="accordionButton">Quick Start Guide</div>
				<div class="accordionContent"><? include('quickinformation.php'); ?></div>
				<div class="accordionButton">Commands</div>
				<div class="accordionContent"><? include('commands.php');?></div>
				<div class="accordionButton">Shop Items</div>
				<div class="accordionContent"><? include('items.php');?></div>
				<div class="accordionButton">Players</div>
				<div class="accordionContent"><? include('players.php');?></div>
			</div>	
		</div>
	</body>
</html>