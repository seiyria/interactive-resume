<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
	<? include('head.php'); ?>
	<body>
		<? include('tagline.php'); ?>
		<? include('navigation.php'); ?>
		<div id="content-block">
		<p>
			<a href='http://vivio.googlecode.com/'>Vivio</a> is a modular IRC bot that serves many purposes. It does a lot of silly things, but that's besides the point. A brief listing of it's features are here in a tabular format!
		</p>
		<div id='spacedTableContainer'>
		<?php
			$url = "http://vivio.googlecode.com/svn/trunk/Vivio/src/commands/";
			
			echo '<table><thead><th>Name</th><th>Description</th><th>Command</th><th>Category</th></thead>';
			
			$arr = preg_split('/$\R?^/m', file_get_contents($url));
			foreach($arr as $name){
				if(strpos($name, "<li>") && strpos($name, "java")) {
					$name = trim(strip_tags($name));
					$new_file = preg_split('/$\R?^/m', file_get_contents($url.trim(strip_tags($name))));
					echo "<tr><td>".substr($name, 0, strlen($name)-12)."</td>";
					foreach($new_file as $line){
						
						if(strpos($line, "@description")) {
							echo "<td>".substr($line,15)."</td>";
						}
						
						else if(strpos($line, "@basecmd")) {
							echo "<td>".substr($line,11)."</td>";
						}
						
						else if(strpos($line, "@category")) {
							echo "<td>".substr($line,12)."</td>";
						}
					}
					echo "</tr>";
				}
			}
			
			echo '</table>';
		?>
		</div>
		</div>
	</body>
</html>