<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
	<? include('head.php'); ?>
	<body>
		<? include('tagline.php'); ?>
		<? include('navigation.php'); ?>
		<div id="content-block">
		Welcome to my website! Below you will find recent entries to <a href="http://seiyria.tumblr.com">my blog</a> which discusses matters of design, philosophy, programming, and my ventures in each.
		</div>
		<br />
		<?
			$xml = simplexml_load_file('http://seiyria.tumblr.com/api/read?num=3');
			$posts = $xml->xpath("/tumblr/posts/post[@type='regular']");
			foreach($posts as $post) {
				echo '<div class="post">';
				echo "<center><span class='title'><a href='".$post['url-with-slug']."'>" . $post->{'regular-title'} . '</a></span><br />';
				echo "<span class='subline'>Posted at ". date('jS D M, H:i',strtotime($post['date'])) . "</span></center>";
				echo $post->{'regular-body'};
				echo '</div><br />';
			}
		?>
	</body>
</html>