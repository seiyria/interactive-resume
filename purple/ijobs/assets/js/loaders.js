

var Loader = Class.extend({
	
	$loader: null,
	
	init: function(_$loader) {
		this.$loader = _$loader;
	},
	
	_imgMap: new Array(),
	
	imgMap: function() {
		return this._imgMap;
	},

	loadFrom: function(file, canvas, fwidth, fheight, iwidth, iheight) {
	
		var loader = this;
		
		var tilesObj = new Image();
		tilesObj.src = file;

		var dCanvas = document.getElementById(canvas);
		var dCtx = dCanvas.getContext('2d');
		
		tilesObj.onload = function() {
			var imageWidth = fwidth;
			var imageHeight = fheight;
			
			var tilesX = imageWidth / iwidth;
			var tilesY = imageHeight / iheight;
			
			dCtx.drawImage(tilesObj, 0, 0);
			
			for(var i=0; i<tilesY; i++) {
				for(var j=0; j<tilesX; j++) {
					var imgCtx = document.createElement("canvas").getContext('2d');
					
					imgCtx.putImageData( 
						dCtx.getImageData(
							j*iwidth, 
							i*iheight, 
							iwidth, 
							iheight
						), 
					0, 0 );
					
					loader._imgMap.push(imgCtx.canvas);
				}
			} 
			loader.$loader.resolve();
		}
	},
});

var TileLoader = Loader.extend({

	_imgMap: new Array(),
	init: function($loader) {
		this._super($loader);
		this.loadFrom('assets/img/tiles.png', 'dummy', 96, 96, 32, 32);
	},

});

var BulletLoader = Loader.extend({
	
	_imgMap: new Array(),
	init: function($loader) {
		this._super($loader);
		this.loadFrom('assets/img/bullets.png', 'dummy2', 24, 24, 8, 8);
	},
	
});

var MobLoader = Loader.extend({
	
	_imgMap: new Array(),
	init: function($loader) {
		this._super($loader);
		this.loadFrom('assets/img/mobs.png', 'dummy3', 96, 96, 32, 32);
	},

});

var PowerupLoader = Loader.extend({
	
	_imgMap: new Array(),
	init: function($loader) {
		this._super($loader);
		this.loadFrom('assets/img/powerup.png', 'dummy4', 32, 32, 16, 16);
	},

});