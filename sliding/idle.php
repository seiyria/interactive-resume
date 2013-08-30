<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
	<? include('head.php'); ?>
	<body>
		<? include('tagline.php'); ?>
		<? include('navigation.php'); ?>
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