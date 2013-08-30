<?php
header("Content-Type: text/plain");
$filename = "players.dat.swap";
if($_GET["start"] && $_POST["msg"]){
	file_put_contents($filename, $_POST["msg"]);
} else if($_GET["start"]){
	file_put_contents($filename, "");
} else if($_POST["msg"]){
	file_put_contents($filename, $_POST["msg"], FILE_APPEND);
} else if($_GET["end"]) {
	unlink("players.dat");
	rename("players.dat.swap","players.dat");
}
echo file_get_contents($filename);
?>