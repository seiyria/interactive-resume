
<?
	$data = file_get_contents("http://idlemaster.googlecode.com/svn/trunk/Idlebot/src/data/DummyUsable.java");
	
	echo '<table style="padding:2px;" cellpadding=4><tr><th style="width:20%">Item</th><th  style="width:15%">cost</th><th style="width:75%">Information</th></tr>';
	foreach(split("[\n]",$data) as $var) {
		if(strpos($var,"new DummyUsable")){
			$list = split("[,]",$var);
			$asdf = split("[\"]", $list[0]);
			echo '<tr><td>' . $asdf[1] . '</td>';
			
			$bools = preg_replace('/"([^"]+)"/', "", $var);
			$bools = split("[,]", $bools);
			if(trim($bools[3]) == "false") {
				echo "<td>Not Buyable</td>";
			} else {
				echo '<td>' . number_format(trim($list[1])) . '</td>';
			}
			//echo '<td>'.trim($bools[3]).'</td>';
			
			$cut = substr($var, strpos($var,$list[2])+1);
			
			$split = split("[\"][,]",substr($cut, 1, strlen($cut)));
			echo '<td>' . $split[0] . '</td></tr>';
				
		}
	}
	echo '</table>';
?>