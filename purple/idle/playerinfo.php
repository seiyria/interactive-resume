<?
//TODO fix TTL countdown
//TODO make TTL count down in real time (fake it with javascript)
function display_vars($object) {
	foreach(get_object_vars($object) as $key => $var) {
		echo '>';
		if(is_object($var)) {
			echo $key;
			display_vars($var);
		}
		else echo $key . ": " . $var;
		echo '<br />';
	}
}
function display_info($object) {
	echo '<div style="width: 55%; float: left;">';
	echo "<span style='font-weight:bold;'>" . $object->{"name"} . ", the " . $object->{"alignment"} . " level " . $object->{"level"} . " " . $object->{"classType"} . "</span>"
	. "<table><tr><td>"
	. "Gold: </td>" . "<td width='70%'>" . number_format($object->{"money"}) . "</td></tr><tr><td>"
	. "TTL: " . "</td><td width='2'>" . formatMilliseconds(bcsub($object->{"timeLeft"}, $object->{"curTime"})) . "</td></tr><tr><td width='2'>"
	. "Equipment </td><td><<".calc_equipment_total($object).">>" . "</td></tr>";
	display_equipment($object);
	echo "<tr><td>Aliases: </td><td width='2'>";
	display_aliases($object);
	echo "</td></tr></table>";
	echo '</div>';
	
	echo '<div style="width: 40%; float: right;">'
	. '<span style="font-weight:bold;text-align: center;">Statistics</span> <br />'
	. '<table>';
	display_statistics($object);
	echo '</table></div>';
}

function display_statistics($object) {
	foreach($object->{"stats"} as $key=>$value) {
		echo determine_stat_info($key, $value);
	}
}

function determine_stat_info($key, $value) {
	switch($key) {
		case "timeSpent": return "<tr><td>Time Spent Idling:</td><td> " . formatMilliseconds($value) . "</td></tr>";
		case "itemUses": return "<tr><td>Items Used:</td><td> " . $value . "</td></tr>";
		case "cataSuffered": return "<tr><td>Cataclysms Suffered:</td><td> " . $value . "</td></tr>";
		case "cataCaused": return "<tr><td>Cataclysms Caused:</td><td> " . $value . "</td></tr>";
		case "battlesCaused": return "<tr><td>Battles Caused:</td><td> " . $value . "</td></tr>";
		case "battlesWon": return "<tr><td>Battles Won:</td><td> " . $value . "</td></tr>";
		case "battlesLost": return "<tr><td>Battles Lost:</td><td> " . $value . "</td></tr>";
		case "blessed": return "<tr><td>Times Blessed:</td><td> " . $value . "</td></tr>";
		case "forsaken": return "<tr><td>Times Forsaken:</td><td> " . $value . "</td></tr>";
		case "fatehand": return "<tr><td>Times Met Fate:</td><td> " . $value . "</td></tr>";
		case "itemBless": return "<tr><td>Items Blessed:</td><td> " . $value . "</td></tr>";
		case "itemForsake": return "<tr><td>Items Forsaken:</td><td> " . $value . "</td></tr>";
		case "moneyFound": return "<tr><td>Times Found Gold:</td><td> " . $value . "</td></tr>";
		case "moneyLost": return "<tr><td>Times Lost Gold:</td><td> " . $value . "</td></tr>";
		case "timesStolen": return "<tr><td>Times Stolen:</td><td> " . $value . "</td></tr>";
		case "timesStolenFrom": return "<tr><td>Times Stolen From:</td><td> " . $value . "</td></tr>";
		case "monsterKilled": return "<tr><td>Monsters Killed:</td><td> " . $value . "</td></tr>";
		default: return "";
	}
}

function display_equipment($object) {
	foreach($object->{"equipment"} as $key=>$value) {
		echo "<tr><td>" . $key . ":</td><td> <span style='color:".determine_color($value->{"iClass"}).";'>" . str_replace("\u0027","'",$value->{"name"}) . "</span></td><td><<" . $value->{"value"} . ">>" . "</td></tr>";
	}
}

function determine_color($class) {
	switch($class) {
	//bold
		case "Animal": return "#8b4513"; //brown
		case "Saint": return "#000080"; //dark blue
		case "Spiritual": return "#00bfff"; //light blue
		case "Avatar": return "#006400"; //dark green
		case "Special": return "#a020f0"; //purple
		case "Retro": return "#000000"; //black
		case "Idle": return "#d02090"; //pink
		case "Newbie": return "#cf6"; //pink
	}
}

function display_aliases($object) {
	$aliases = array();
	foreach($object->{"aliases"} as $value) {
		if(!in_array($value->{"nick"}, $aliases))
			array_push($aliases, $value->{"nick"});
	}
	echo implode($aliases, ", ");
}

function formatMilliseconds($milliseconds) {
    $seconds = floor($milliseconds / 1000);
    $minutes = floor($seconds / 60);
    $hours = floor($minutes / 60);
    $days = floor($hours / 24);
    
    $seconds = $seconds % 60;
    $minutes = $minutes % 60;
    $hours = $hours % 24;
    $days = $days % 365;

    $time = $seconds . " seconds";
    if($minutes > 0) $time = $minutes . " minutes, " . $time;
    if($hours > 0) $time = $hours . " hours, " . $time;
    if($days > 0) $time = $days . " days, " . $time; 
    return rtrim($time, '0');
}
?>