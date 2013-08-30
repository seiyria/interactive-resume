<?

function calc_equipment_total($object) {
	$total = 0;
	if(count($object) == 0) return 0;
	foreach($object->{"equipment"} as $key) {
		$total += intval($key->{"value"});
	}
	return $total;
}
?>