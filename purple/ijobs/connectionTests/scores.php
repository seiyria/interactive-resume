<?php include_once("connect.php");?>
<!DOCTYPE html>
<html>
	<head></head>
	<body>
	<?php
	 $auth = $db->query("SELECT * FROM dailyscores JOIN users ON users.id = dailyscores.userid WHERE score > 50 ORDER BY score DESC");
	 ?>	
		<table>
			<th>User</th>
			<th>Score</th>
			<th>Country</th>
			<th>Time Achieved</th>
			
			<?php foreach($auth as $auths){?>
			<tr>
				<td><?=$auths['username'];?></td>
				<td><?=$auths['score'];?></td>
				<td><?=strToUpper($auths['country']);?></td>
				<?php $date = date_create($auths['time']);?>
				<td><?=date_format($date,'m/d/y \@ g:ia');?></td>
			</tr>
			<?php } ?>
			
		</table>
	</body>
</html>