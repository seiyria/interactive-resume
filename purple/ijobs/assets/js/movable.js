
//constants	
var timeInterval = 1;

//directional movement
var dir = {left: 1, up: 2, right: 4, down: 8};

var Movable = Entity.extend({
	
	angle: 0,
	
	movementFrozen: false,

	init: function(x, y) {
		this._super(x,y);
		this.movement();
	},
	
	movementInterval: null,

	currentDir: dir.up,

	moveSpeed: 0.5,
	maxSpeed: 5,
	
	yVel: 0,
	xVel: 0,
	
	dt: 0,
	
	collideWith: function(entity) {
		if(entity !== undefined)
			entity.collidedWith(this);
	},
	
	collidedWith: function(source) {},
	
	modifyMovement: function() {},
	
	setVelocityForAngle: function(angle, vel) {
		if(vel == null) vel = this.moveSpeed;
		this.angle = angle;
		this.xVel = Math.cos(angle*(Math.PI/180))*vel;
		this.yVel = Math.sin(angle*(Math.PI/180))*vel;
	},
	
	setVelocityForDirection: function(direct, vel) {
		if(vel == null) vel = this.moveSpeed;
		this.currentDir = direct;
		if((direct & dir.up) > 0)	 	this.yVel += vel;
		if((direct & dir.down) > 0) 	this.yVel -= vel;
		if((direct & dir.right) > 0)	this.xVel += vel;
		if((direct & dir.left) > 0) 	this.xVel -= vel;
	},
	
	changeDir: function() {
		if(this.xVel > 0) {
			this.currentDir = dir.right;
		} else if(this.xVel < 0) {
			this.currentDir = dir.left;
		} 
		
		if(this.yVel > 0) {
			this.currentDir |= dir.up;
		} else if(this.yVel <= 0) {
			this.currentDir |= dir.down;
		}
	},
	
	intersects: function(other) {
		return !(this.px+this.width < other.px 	||
				 this.px > other.px+other.width 	||
				 this.py+this.height < other.py 	||
				 this.py > other.py+other.height	);
	},	
				
	getNewX: function(pxOffset) {
		return this.getPx()+pxOffset+((this.currentDir&dir.left)!=0 ? 0 : this.width);
	},
	
	getNewY: function(pyOffset) {
		return this.getPy()+pyOffset+((this.currentDir&dir.down)!=0 ? 0 : this.height);
	},
	
	hitBounds: function() {},
	
	canMove: function() {
		return !Game.isPaused && !this.movementFrozen;
	},
	
	//do a movement
	move: function(xMod, yMod) {
	
		if(xMod == 0 && yMod == 0) return;
		
		var newX = this.getNewX(xMod);
		var newY = this.getNewY(yMod);
		
		if(newX < 0 || newX >= (Map.tilesX())*32) {
			this.hitBounds();
			return;
		}
		if(newY < 0 || newY >= (Map.tilesY())*32) {
			this.hitBounds();
			return;
		}
		
		this.addPx(xMod);
		this.addPy(yMod);
	},
	
	movement: function() {
	
		var entity = this;
	
		this.movementInterval = setInterval(function() {
		
			if(!entity.canMove()) return;
			entity.dt+=timeInterval;
			entity.move();
			entity.modifyMovement();
			
		}, timeInterval);
	},
});