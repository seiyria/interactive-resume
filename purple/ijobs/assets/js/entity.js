

var Entity = Class.extend({

	px: 0,
	py: 0,
	
	width: 32,
	height: 32,
	
	density: false,

	imgData: null,
	
	init: function(px, py) {
		this.setX(px);
		this.setY(py);
	},
	
	setX: function(newPX) {
		this.px = newPX;
	},
	
	setY: function(newPY) {
		this.py = newPY;
	},
	
	addPx: function(pPx) {
		this.setX(this.getPx()+pPx);
	},
	
	addPy: function(pPy) {
		this.setY(this.getPy()+pPy);
	},
	
	getPx: function() {
		return this.px;
	},
	
	getX: function() {
		return Math.floor(this.getPx()/this.width);
	},
	
	getPy: function() {
		return this.py;
	},
	
	getY: function() {
		return Math.floor(this.getPy()/this.height);
	},
});