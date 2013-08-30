
<?
	$data = file_get_contents("http://idlemaster.googlecode.com/svn/trunk/Idlebot/src/listeners/CommandListener.java");
	echo '<table style="padding:2px;" cellpadding=4><tr><th style="width:10%">Command</th><th  style="width:35%">Params</th><th style="width:45%">Information</th><th style="width:10%">Penalty</th></tr>';
	foreach(split("[\n]",$data) as $var) {
		if(strpos($var, "COMMAND")) {
			echo '<tr><td>' . substr($var, strpos($var, "COMMAND")+8) . '</td>';
		} else if(strpos($var, "ARGUMENTS")) {
			echo '<td>' . substr($var, strpos($var,"ARGUMENTS")+10) . '</td>';
		} else if(strpos($var, "HELP")) {
			echo '<td>' . substr($var, strpos($var,"HELP")+5) . '</td>';
		} else if(strpos($var, "PENALTY")) {
			echo '<td>' . substr($var, strpos($var,"PENALTY")+8) . '</td>';
		}
	}
	echo '</table>';
?>