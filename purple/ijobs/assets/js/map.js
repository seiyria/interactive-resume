

var Map = {
	
	//height and width of the canvas
	height: 320,
	width: 640,
	
	fps: 60,
	
	//the map data
	map: new Array(),
	
	//tile dimensions
	tileHeight: 32,
	tileWidth: 32,
	
	ticks: 0,
	
	//tiles on the map
	tilesX: function() { return this.width/this.tileWidth; },
	tilesY: function() { return this.height/this.tileHeight; },

	//initialize the map to have a row of grass, and the rest sky
	initialize: function(promises) {
			
		var map = this;
		
		$.when.apply($, promises).then(function() {
			for(var y=0; y<map.tilesY(); y++) {
				map.map[y] = new Array(map.tilesX());
			}
			
			for(var y=0; y<map.tilesY(); y++) {			
				for(var x=0; x<map.tilesX(); x++) {
					map.setOnMap(new Tile(0, x*map.tileWidth,y*map.tileHeight), x, y);
					if(Math.random() > 0.9) {
						map.setOnMap(new Tile(getRandomInt(1,8), x*map.tileWidth, y*map.tileHeight), x, y);
					}
				}	
			}
								
			map.redraw();
		});
		
	},
	
	//place an entity on the map at a given position
	setOnMap: function(entity, x, y) {
		this.map[y][x] = entity;
	},
	
	//get an entity from a map at a given position
	getFromMap: function(x, y) {
		return this.map[y][x];
	},

	//redraw the map.
	redraw: function() {
		var map = this;
		
		setInterval(function() {
			ctx.clear(true);
			
			Map.drawTiles();
			
			switch(Game.state) {
			
				case state.mainmenu:
					drawClickableRectangle(ctx, (canvas.width/2)-128, (canvas.height/2)-14, 215, 46,  
					function() {
						Game.start();
					});
					Game.drawText('START', 64, (canvas.width/2)-128, -(canvas.height/2)+32);
					Game.drawText('STARSHIP ORIAM', 64, (canvas.width/2)-288, -(canvas.height/2)-92);
					break;
					
				case state.game:
		
					Map.drawPowerups();
		
					Map.drawBullets();
					
					Map.drawPlayer();
					
					Map.drawHUD();
					
					//gotta draw dat text
					if(Game.isDrawingLargeText) {
						Game.drawText(Game.largeText.text, Game.largeText.curSize, (canvas.width/2)-(Game.largeText.curSize*2), -(canvas.height/2)+32);
					}
					
					//dat flicker effect
					if(Game.isPaused && map.ticks<750 && !Game.isDrawingLargeText) {
						Game.drawText('PAUSED', '64px', (canvas.width/2)-128, -canvas.height/2);
					}
					break;
					
				case state.gameover:
					drawClickableRectangle(ctx, (canvas.width/2)-128, (canvas.height/2)-14, 215, 46,  
					function() {
						Game.state = state.mainmenu;
					});
					Game.drawText('RETRY', 64, (canvas.width/2)-128, -(canvas.height/2)+32);
					var score = 'SCORE: '+Game.calcScore();
					Game.drawText(score, 28, (canvas.width/2)-(score.length*4)-64, -(canvas.height/2)-48);
					Game.drawText('GAME OVER', 64, (canvas.width/2)-224, -(canvas.height/2)-92);
				break;
			}
			
			map.ticks+=(1000/map.fps);
			if(map.ticks > 1000) { map.ticks = 0; }
		
		}, 1000/map.fps);
	},
	
	drawPowerups: function() {
		for(var x=0; x<powerups.length; x++) {
			var powerup = powerups[x];
			ctx.drawImage(powerup.getImgData(), powerup.getPx(), powerup.getPy());
		}
	},
	
	drawPlayer: function() {
		ctx.save();
		player.getImgData().getContext('2d').scale(0.5,0.5);
		ctx.translate(player.getPx() + player.width/2, player.getPy() + player.height/2);
		ctx.scale(1, -1);
		ctx.drawImage(player.getImgData(), -(player.width/2), -(player.height/2));
		ctx.restore();
	},
	
	drawBullets: function() {
		for(var x=0; x<bullets.length; x++) {
			var bullet = bullets[x];
			if(bullet.angle!=0) {
				ctx.save();
				ctx.translate(bullet.getPx() + bullet.width/2, bullet.getPy() + bullet.height/2);
				ctx.rotate(bullet.angle * (Math.PI/180));
					
				ctx.drawImage(bullet.getImgData(), -(bullet.width/2), -(bullet.height/2));
				ctx.restore();
			} else {
				ctx.drawImage(bullet.getImgData(), bullet.getPx(), bullet.getPy());
			}
		}
	},
	
	drawTiles: function() {	
		for(var y=0; y<Map.tilesY(); y++) {
			for(var x=0; x<Map.tilesX(); x++) {
				var entity = Map.getFromMap(x,y);
				ctx.drawImage(entity.getImgData(), entity.getPx(), entity.getPy());
			}
		}	
	},
	
	drawHUD: function() {
	
		Game.drawText('Level '+Game.level, 12, 0, -canvas.height+12);
		
		Game.drawText('Lives', 12, 64, -canvas.height+12);
		
		ctx.save();
		
		ctx.scale(0.5, -0.5);
		for(var i=0; i<player.lives; i++) {
			ctx.drawImage(player.getImgData(), 196+(i*32), -(canvas.height*2));
		}
		
		ctx.restore();
	}

};