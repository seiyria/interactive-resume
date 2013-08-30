
/*
	GAME CONSTANTS
*/
var ctx;
var player;
	
var promises = new Array();

/*
	SPRITE CONSTANTS
*/
var monsters = new Array();
var mobs = {ninja: 0, spinner: 1, player: 2, forward: 3, homing: 4, laser: 5};

/*
	POWERUP CONSTANTS
*/
var powerups = new Array();
var powerupType = {wave: 0, life: 1, buff: 2, split: 3};


/*
	BULLET CONSTANTS
*/
var bullets = new Array();

var bulletType = {normal: 1, fire: 0, ice: 3, shock: 6};

/*
	GLOBAL OBJECTS
*/

var state = {mainmenu: 0, game: 1, gameover: 2};

//the renderers available
var renderers = {};

//direction to button mapping
var arrow = {left: 37, up: 38, right: 39, down: 40};

//a simple vec2 implementation
var vec2 = Class.extend({
	
	x: 0,
	y: 0,
	
	init: function(_x, _y) {
		this.x = _x;
		this.y = _y;
	}
});

/* 
	MOVEMENT OBJECTS
*/

//default movement
var linear = {
	nextMove: function(entity) {
		return new vec2(entity.xVel, entity.yVel);
	}
};

//follows the player
var homing = {
	nextMove: function(entity) {
		var dY = -(entity.getPy() - player.getPy());
		var dX = -(entity.getPx() - player.getPx());
		entity.angle = (Math.atan2(dY, dX)*2) * (180/Math.PI);
		return new vec2( clamp(dX, -entity.maxSpeed, entity.maxSpeed), clamp(dY, -entity.maxSpeed, entity.maxSpeed) );
	}
};

var spinning = {
	nextMove: function(entity) {
		entity.angle=(entity.angle+0.5)%360;
		return new vec2(entity.xVel, entity.yVel);
	}
};

var twice = {
	nextMove: function(entity) {
		var bullet = new Bullet(entity.origin, entity.getPx(), entity.getPy()+(entity.height/2), linear, entity.bType);
		bullet.xVel = entity.xVel;
		bullet.yVel = entity.yVel;
		
		bullet = new Bullet(entity.origin, entity.getPx(), entity.getPy()-(entity.height/2), linear, entity.bType);
		bullet.xVel = entity.xVel;
		bullet.yVel = entity.yVel;
		
		entity.clearMe();
		return new vec2(0, 0);
	}
};

//three bullets
var thrice = {
	nextMove: function(entity) {
		entity.clearMe();
		spawnAngularBullet(entity.origin, 0, false, entity.xVel);
		spawnAngularBullet(entity.origin, 45, false, entity.xVel);
		spawnAngularBullet(entity.origin, -45, false, entity.xVel);
		return new vec2(entity.xVel, entity.yVel);
	}
};

//seven bullets
var sice = {
	nextMove: function(entity) {
		entity.clearMe();
		spawnAngularBullet(entity.origin, -67.5, false, entity.xVel);
		spawnAngularBullet(entity.origin, -45, false, entity.xVel);
		spawnAngularBullet(entity.origin, -22.5, false, entity.xVel);
		spawnAngularBullet(entity.origin, 0, false, entity.xVel);
		spawnAngularBullet(entity.origin, 22.5, false, entity.xVel);
		spawnAngularBullet(entity.origin, 45, false, entity.xVel);
		spawnAngularBullet(entity.origin, 67.5, false, entity.xVel);
		return new vec2(entity.xVel, entity.yVel);
	}
};

//cluster bullets
var cluster = {
	nextMove: function(entity) {
		entity.clearMe();
		spawnAngularBullet(entity.origin, -67.5, false, entity.xVel);
		spawnAngularBullet(entity.origin, -45, false, entity.xVel);
		spawnAngularBullet(entity.origin, -22.5, false, entity.xVel);
		spawnAngularBullet(entity.origin, 0, false, entity.xVel);
		spawnAngularBullet(entity.origin, 22.5, false, entity.xVel);
		spawnAngularBullet(entity.origin, 45, false, entity.xVel);
		spawnAngularBullet(entity.origin, 67.5, false, entity.xVel);
		
		spawnAngularBullet(entity.origin, -67.5-180, false, entity.xVel);
		spawnAngularBullet(entity.origin, -45-180, false, entity.xVel);
		spawnAngularBullet(entity.origin, -22.5-180, false, entity.xVel);
		spawnAngularBullet(entity.origin, 0-180, false, entity.xVel);
		spawnAngularBullet(entity.origin, 22.5-180, false, entity.xVel);
		spawnAngularBullet(entity.origin, 45-180, false, entity.xVel);
		spawnAngularBullet(entity.origin, 67.5-180, false, entity.xVel);
		return new vec2(entity.xVel, entity.yVel);
	}
};

//sinewave
var wave = {
	nextMove: function(entity) {
		if(entity.dt%100)
			return new vec2(entity.xVel, Math.sin(entity.dt * (entity.isPositive ? 30 : -30)) * 30);
		return new vec2(entity.xVel, entity.yVel);
	}
};

var doublewave = {
	nextMove: function(entity) {
		var bullet = new Bullet(entity.origin, entity.getPx(), entity.getPy()+(entity.height/2), wave, entity.bType);
		bullet.xVel = entity.xVel;
		bullet.yVel = entity.yVel;
		bullet.isPositive = true;
		
		bullet = new Bullet(entity.origin, entity.getPx(), entity.getPy()-(entity.height/2), wave, entity.bType);
		bullet.xVel = entity.xVel;
		bullet.yVel = entity.yVel;
		bullet.isPositive = false;
		
		entity.clearMe();
		return new vec2(0, 0);
	}
};

//totally random movement
var random = {
	nextMove: function(entity) {
		if(entity.dt%25 == 0)
			return new vec2((Math.random()-0.5) * entity.maxSpeed, (Math.random()-0.5) * entity.maxSpeed);
		return new vec2(entity.xVel, entity.yVel);
	}
};

//only vertical movement
var vertical = {
	nextMove: function(entity) {
		if(entity.getPy()+entity.yVel > (Map.tilesY()-1.5)*32) {
			return new vec2(0, -0.5);
		} else if(entity.getPy()+entity.yVel < 16) {
			return new vec2(0, 0.5);
		} 
		return new vec2(0, entity.yVel);
	}
};

/*
	ENEMY OBJECTS
*/
var BasicEnemy = {
	spawn: function(x,y,intensity) {
		var e = new Enemy(null, x, y, linear, mobs.forward);
		e.setVelocityForDirection(dir.left, 0.5*(intensity==null?1:intensity));
		return e;
	}
};

var HomingEnemy = {
	spawn: function(x,y,intensity) {
		var e = new Enemy(null, x, y, homing, mobs.homing);
		e.maxSpeed=0.8*(intensity==null?1:intensity);
		e.setVelocityForDirection(dir.left, 0.8*(intensity==null?1:intensity));
		return e;
	}
};

var SpinningEnemy = {
	spawn: function(x,y,intensity) {
		var shooting = function() {
			if(this.dt%20==0) {
				spawnAngularBullet(this, this.angle, true);
			}
		};
		var e = new Enemy(null, x, y, spinning, mobs.spinner, shooting);
		e.setVelocityForDirection(dir.left, 0.1*(intensity==null?1:intensity));
		return e;
	}
};

var LaserEnemy = {
	spawn: function(x,y,intensity) {
		var shooting = function() {
			if(this.dt%18==0) {
				var bullet = new Bullet(this, this.getPx()-10, this.getPy()+(this.height/2)-5, linear, bulletType.shock);
				bullet.setVelocityForDirection(dir.left, 0.5*(intensity==null?1:intensity));
			}
		};
		var e = new Enemy(null, x, y, vertical, mobs.laser, shooting);
		e.setVelocityForDirection(Math.random() > 0.5 ? dir.up : dir.down, 0.5*(intensity==null?1:intensity));
		return e;
	}
};

//shoots in four directions, rotates 45deg and moves around, does it again
var NinjaEnemy = {
	spawn: function(x,y,intensity) {
		var shooting = function() {
			if(this.angle%45==0) {
				this.movementFrozen = true;
				spawnAngularBullet(this, this.angle);
				spawnAngularBullet(this, this.angle+90);
				spawnAngularBullet(this, this.angle+180);
				spawnAngularBullet(this, this.angle+270);
				
				var ship = this;
				setTimeout( function() {
					ship.movementFrozen = false;
				}, 1000);
			}
		};
		var e = new Enemy(null, x, y, spinning, mobs.ninja, shooting);
		e.setVelocityForDirection(dir.left, 0.3*(intensity==null?1:intensity));
		return e;
	}
};

//explodes bullets in eight directions
var MineEnemy = {
};