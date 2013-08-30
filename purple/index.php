<!DOCTYPE html>
<html>

	<head>
		
		<title>Home of Kyle J. Kemp</title>

		<link rel="stylesheet" href="css/styles.css" />
		<link rel="stylesheet" href="css/MetroJs.css" />
	
		<script src="//code.jquery.com/jquery.min.js"></script>
		<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
		<script src="js/MetroJs.js"></script>
		<script type="text/javascript">
			var _gaq = _gaq || [];
			_gaq.push(['_setAccount', 'UA-34775403-1']);
			_gaq.push(['_trackPageview']);

			(function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
			})();
		</script>
	</head>
	
	<body>
		<div id="internal-content">
			<div id="about">
				<div class="content-header">About Me</div>
				<div class="content-subheader">(Pronoun: me /m&#275;/ 1. The guy that made this site)</div>
				<p>Hi! My name is Kyle, and I'm a 20 year old college student, studying software engineering.</p>
				<p>In my spare time, I like to go rock climbing, make flowers out of wire, play sports, do some programming, play video games, or just hang around with friends. I spend a lot of time working in several artistic mediums, such as code, clay, paper, wire, plexiglass, paint, and paper/pen drawing. Sometimes I even like to work on this website (I know, unbelievable, right?)! As such, this site is always a work in progress. Sorry if it looks sloppy when you see it!</p>
				<p>A lot of my polished programming endeavours are related to <a href="http://en.wikipedia.org/wiki/Internet_Relay_Chat" target="_blank">IRC</a>, but I spend a lot of time working with a multitude of languages and technologies! For a comprehensive list, please check my <a href="https://docs.google.com/document/d/1zNwUa9BVR82eZgiGdoLYQrt9qOkHcSQG2Duat4mixzM/edit?authkey=CJuEposI&authkey=CJuEposI">resume</a>.</p>
			</div>
			
			<div id="contact">
				<div class="content-header">Ways to Contact Me</div>
				<div class="content-subheader">(it's harder to count the ways to NOT contact me)</div>
				<p>
				I am available pretty much everywhere on the internet, however most people would prefer to <a href="mailto:kyle@seiyria.com">email me</a>. If that doesn't work out for some reason, here are some other ways and places to contact me:
				</p>
				<ul>
					<li><a href="skype:raruvth?chat">Skype me</a></li>
					<li><a href="https://twitter.com/seiyria">Tweet at me on Twitter</a></li>
					<li><a href="http://www.linkedin.com/profile/view?id=91246646&trk=tab_pro">Connect with me on Linkedin</a></li>
				</ul>
				<p>
					And hey, you could always join me in IRC at irc.esper.net#kellyirc! I'm there a lot too.
				</p>
			</div>
			
			<div id="network">
				<div class="content-header">My Network</div>
				<div class="content-subheader">(s/network/minions)</div>
				<p>
				<dl>
					<dt><a href="http://rahat.seiyria.com">Rahat</a></dt>
					<dd>co-creator of kEllyIRC, awesome guy, inspired me to touch up my website, helps out with Vivio</dd>
					<dt><a href="http://rayh.seiyria.com">Raymond</a></dt>
					<dd>co-creator of kEllyIRC, swedish guy, busy competing with Rahat and I for the best website, helps out with Vivio</dd>
					<dt><a href="http://djpixzel.seiyria.com/">Lucas</a></dt>
					<dd>he's one hell of an electronic musician</dd>
				</dl>
				</p>
			</div>
			
			<div id="vivio">
				<div class="content-header">Vivio</div>
				<div class="content-subheader">(revolutionizing your IRC experience one module at a time)</div>
				<p>
					<a href="https://code.google.com/p/vivio/">Vivio</a> is an IRC bot that brings a lot of enhancements to an IRC channel. It can do simple things like calculate an expression (which can be rather complex), google a query, roll some dice for you, or check the weather.
				</p>
				<p>
					This project was initially conceived several years ago when I wanted a framework for an IRC bot that could just do a lot of things (because doing things is tedious). I started it, and now I'm on the third revision, using the fantastic <a href="https://code.google.com/p/pircbotx/">PircBotX</a> library. It uses a lot of neat tricks like reflection (for fully dynamic loading of modules/function invocation) and a shell script that the bot can run to update itself.
				</p>
			</div>
			
			<div id="idle">
				<div class="content-header">Word Soup</div>
				<div class="content-subheader">(do things while you're not doing things)</div>
				<p>
				Word Soup, or IdleMaster, is the ultimate idling game. And by ultimate, I mean I think it's more fantastic than IdleRPG (and not just because I made it!). It's highly entertaining (or so I'm told), features a lot of zany monsters, items, and all sorts of crazy events that happen moderately often. It's so fun, the bot even plays with the players! If you would like to join the madness, connect to irc.esper.net:6667#idlebot and join in!
				</p>
				<p>
				For more information or some statistics on the players currently playing, and you can go <a href="idle/idle.php" target="_blank">here</a>.
				</p>
			</div>
			
			<div id="kirc">
				<div class="content-header">kEllyIRC</div>
				<div class="content-subheader">(coming to a computer near you... or the one that you're using)</div>
				<p>Around December 2010, I realized there was a huge gap in feature-filled IRC clients. I started planning <a href="https://code.google.com/p/kellyirc/">kEllyIRC</a> in response to this. I proposed the idea to a small group of people, and while they all seemed positive, only <a href="#" onclick="$('#tile-network').trigger('click');">two</a> decided to step up and help out the creation process.</p>
				<p>What I felt the market was missing was a client that was aesthetically pleasing, very extensible, dedicated to IRC, cross-platform, and has fantastic support for standard scripting languages (JavaScript, Python, Ruby, etc). While many clients pass the first four tests, very few pass the final test: scripting languages. As such, it was my pet project to build an IDE right into kEllyIRC. Fast forward to now, and we have a fully-functioning IRC client (with a few quirks). We have not built any public binaries for the client.</p>
			</div>
			
			<div id="copyright">
				<div class="content-header">Credits and Stuff I Used</div>
				<div class="content-subheader">(libraries rock)</div>
				<dl>
					<dt>jQuery</dt>
					<dd><a href="http://jquery.com/">http://jquery.com/</a></dd>
					<dt>Metro JS</dt>
					<dd><a href="http://www.drewgreenwell.com/projects/metrojs">http://www.drewgreenwell.com/projects/metrojs</a></dd>
				</dl>
			</div>
		</div>
		<div id="container">
			<div id="left">
				<div id="tiles-left" class="tile-container">
					<div class="live-tile no-content darkpurple" id="tile-me" data-direction="vertical" data-mode="flip">
						<div class="front" style="border: 1px solid #000;"><p class="tile-header">Kyle J Kemp</p></div>
						<div class="back" style="border: 1px solid #000;"><span class="tile-title">(seiyria)</span></div>
					</div>
					<div class="live-tile darkpurple" id="tile-vivio" data-direction="horizontal" data-mode="slide">
						<div class="front"><p class="tile-header">Vivio</p></div>
						<div class="back"><span class="tile-title">(IRC Bot)</span></div>
					</div>
					<div class="live-tile darkpurple" id="tile-idle" data-direction="horizontal" data-mode="slide">
						<div class="front"><p class="tile-header">Word Soup</p></div>
						<div class="back"><span class="tile-title">(IRC Game)</span></div>
					</div>
					<div class="live-tile darkpurple" id="tile-kirc" data-direction="horizontal" data-mode="slide">
						<div class="front"><p class="tile-header">kEllyIRC</p></div>
						<div class="back"><span class="tile-title">(IRC Client)</span></div>
					</div>
					<div class="live-tile darkpurple" id="tile-copyright" data-direction="horizontal" data-mode="slide">
						<div class="front"><p class="tile-header">Copyright</p><span class="tile-title">2012 &copy; Kyle Kemp</span></div>
						<div class="back"><span class="tile-title">(Spoilers)</span></div>
					</div>
				</div>
			</div>
			<div id="right">
				<div id="tiles-top" class="tile-container">
					<div class="live-tile darkpurple" id="tile-about" data-direction="vertical" data-mode="slide">
						<div class="front"><p class="tile-header">About</p></div>
						<div class="back"><span class="tile-title">(I'm awesome)</span></div>
					</div>
					<div class="live-tile darkpurple" id="tile-contact" data-direction="vertical" data-mode="slide">
						<div class="front"><p class="tile-header">Contact</p></div>
						<div class="back"><span class="tile-title">(I'm everywhere)</span></div>
					</div>
					<div class="live-tile darkpurple" id="tile-network" data-direction="vertical" data-mode="slide">
						<div class="front"><p class="tile-header">Network</p></div>
						<div class="back"><span class="tile-title">(I'm popular)</span></div>
					</div>
				</div>
				<br />
				<div id="content">
					<div id="contentcontainer">
						<div id="innercontent">
							<!--[if IE]>
							<div id="IESucks" class="purple">
								<p>Hey, I noticed you're using IE. While this shouldn't be a problem with this site, developers across the world would appreciate it if you would consider using a browser that works better with the web, like <a href="https://www.google.com/intl/en/chrome/browser/">Google Chrome</a>, <a href="http://www.mozilla.org/en-US/firefox/new/">Mozilla Firefox</a>, or <a href="http://www.opera.com/">Opera</a>.</p>
							</div>
							<![endif]-->
						</div>
						<div id="nextcontent" style="display: none;">
						</div>
					</div>
				</div>
			</div>
		</div>	
	</body>
	<script src="js/tile-data.js"></script>
	
	<!--[if IE]> -->
	<script type="text/javascript">
	//setTimeout(loadContent('about'), 10000);
	curPage = '';
	</script>
	<!--<![endif]-->
	
	<!--[if !IE]> -->
	<script type="text/javascript">
	loadContent('about', false);
	</script>
	<!--<![endif]-->
</html>