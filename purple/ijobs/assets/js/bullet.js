

var Bullet = Enemy.extend({

	width: 8,
	height: 8,
	
	origin: null,
	bType: null,
	moveFlow: null,
	angle: 0,
	isPositive: null,

	init: function(origin, x, y, flow, _type) {
		this._super(origin,x,y,flow);
		this.bType = _type;
		this.moveSpeed = 2;
		this.isPositive = Math.random() > 0.5;
	},
	
	getImgData: function() {
		return renderers.bullet.imgMap()[(this.bType == null) ? bulletType.normal : this.bType];
	},
});