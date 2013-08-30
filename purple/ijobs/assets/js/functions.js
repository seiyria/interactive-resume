

CanvasRenderingContext2D.prototype.clear = 
CanvasRenderingContext2D.prototype.clear || function (preserveTransform) {
	if (preserveTransform) {
		this.save();
		this.setTransform(1, 0, 0, 1, 0, 0);
	}

	this.clearRect(0, 0, this.canvas.width, this.canvas.height);

	if (preserveTransform) {
		this.restore();
	}           
};

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clamp(num, min, max) {
	return Math.min(Math.max(num, min), max);
}

function spawnAngularBullet(entity, angle, unitLoc, vel) {
	//					center					unit circle position									 because bullets are 8x8
	var xPos = (entity.getPx()+entity.width/2) + (unitLoc ? (Math.cos(entity.angle*(Math.PI/180))*entity.width ) : 0)-4;
	var yPos = (entity.getPy()+entity.height/2)+ (unitLoc ? (Math.sin(entity.angle*(Math.PI/180))*entity.height) : 0)-4;
	var bullet = new Bullet(entity, xPos, yPos, linear, bulletType.ice);
	bullet.setVelocityForAngle(angle, vel == null ? 0.5 : vel);
};

var createClickMap = function(canvas, x, y, w, h, f){
    var m = function(x, y, w, h, mx, my){
        var xEnd = (x+w);
            yEnd = (y+h);
        if(mx > x && mx < xEnd){
            if(my > y && my < yEnd){
                return true;
            }    
        }
        return false;
    };
    
    $(canvas).click(function(v){
        var mX = v.pageX - this.offsetLeft,
            mY = v.pageY - this.offsetTop;
		if(m(x, y, w, h, mX, mY)){
			f();
		}
    });
}

var drawClickableRectangle = function(context, x, y, w, h, f) {
    /*
    context.beginPath();
	context.fillStyle = 'red';
    context.rect(x, y, w, h);
    context.closePath();

    context.fill();
    */
    if(typeof f == "function"){
        createClickMap(context.canvas, x, y, w, h, f);
    }
}

function determineBulletTypeFromShot(shot) {
	switch(shot) {
		case linear: case twice: case spinning: case wave: case doublewave: case random: return bulletType.fire;
		default: return bulletType.ice;
	}
}