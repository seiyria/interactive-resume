

var Powerup = Movable.extend({
	
	imgPos: null, 
	
	width: 16,
	height: 16,
	
	init: function(x, y, _imgPos) {
		this._super(x,y);
		this.imgPos = _imgPos;
		powerups.push(this);
		
		var me = this;
		setTimeout(function() {
			me.clearMe();
		}, 5000);
	},
	
	move: function() {
		this._super(0, 0);
	},
	
	apply: function() {
		switch(this.imgPos) {
			case powerupType.wave:
				if(player.secondShotType == wave) {
					Game.beginDrawingText("2xWAVE");
					player.secondShotType = doublewave;
				} else if(!player.secondShotType) {
					Game.beginDrawingText("WAVE");
					player.secondShotType=wave;
				}
				break;
			case powerupType.life:
				Game.beginDrawingText("LIFE++");
				player.lives++;
				break;
			case powerupType.buff:
				Game.beginDrawingText("SHIP++");
				player.maxSpeed += 0.05;
				player.autoShootSpeed = clamp(player.autoShootSpeed-20, 100, 350);
				break;
			case powerupType.split:
				if(player.shotType == linear) {
					Game.beginDrawingText("2xSHOT");
					player.shotType = twice;
				} else if(player.shotType == twice) {
					Game.beginDrawingText("3xSHOT");
					player.shotType = thrice;
				} else if(player.shotType == thrice) {
					Game.beginDrawingText("7xSHOT");
					player.shotType = sice;
				} else if(player.shotType == sice) { 
					Game.beginDrawingText("CLUSTER");
					player.shotType = cluster;
				}
				break;
		}
	},
	
	collidedWith: function(entity) {
		this.apply();
		this.clearMe();
	},
	
	getImgData: function() {
		return renderers.powerup.imgMap()[this.imgPos];
	},
	
	clearMe: function() {
		var removed = this;
		powerups = $.grep(powerups, function(val) {
			return val != removed;
		});
	},
});