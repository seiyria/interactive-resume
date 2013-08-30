<?php
include_once('equipmentfunctions.php');
include_once('playerinfo.php');

$page = file_get_contents("players.dat");
$array = preg_split("[\n]",$page);

$count = 0;
echo '<table style="width: 100%;"><tr>';
foreach($array as $var) {
	if($var == "") continue;
	
	$decoding = str_replace("u0027","\\\u0027", str_replace("\\","",$var));
	$decoding = utf8_decode($decoding);
	$data = json_decode($decoding);
	
	echo '<td><div style="display:none;"><div class="innercontent" id="data-'.$data->{"name"}.'">';
	display_info($data);
	echo '</div></div></td>';
	
	if(($count++%4 == 0)) echo '<tr>';
	
	echo "<td style='width:25%;'><a class='inline' href='#data-".$data->{"name"}."'>" . $data->{"name"} . "</a>: " . calc_equipment_total($data) . "</td>";
	if(($count%4 == 0)) echo '</tr>';
}
if(!($count%4 == 0)) echo '</tr>';
echo '</table>';
?>