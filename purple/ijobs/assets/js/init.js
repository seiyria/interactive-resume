

$(document).ready(function() {

	//handling pauses
	$(":not(canvas,#canvascontainer,body,html)").click(function() {
		Game.pause();
	});
	
	$(window).blur(function() {
		Game.pause();
	});
	
	$("#game").blur(function() {
		Game.pause();
	});
	
	$("#game").focus(function() {
		Game.unpause();
	});

	canvas = document.getElementById("game");
	ctx = canvas.getContext('2d');
	
	//flip the canvas upside down
	ctx.translate(0, ctx.canvas.height);
	ctx.scale(1, -1);
	
	//the tiles can only be rendered on the map when they're ready
	var $tilesReady = new $.Deferred();
	var $bulletsReady = new $.Deferred();
	var $mobsReady = new $.Deferred();
	var $powerupsReady = new $.Deferred();
	
	promises.push($tilesReady);
	promises.push($bulletsReady);
	promises.push($mobsReady);
	promises.push($powerupsReady);
	
	renderers.tile=new TileLoader($tilesReady);
	renderers.bullet=new BulletLoader($bulletsReady);
	renderers.mob=new MobLoader($mobsReady);
	renderers.powerup=new PowerupLoader($powerupsReady);
	
	Map.initialize(promises);
});