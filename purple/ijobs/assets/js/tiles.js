

var Tile = Entity.extend({

	mapPos:-1,
	
	init: function(value, x, y) {
		this._super(x, y);
		this.mapPos = value;
	},
	
	getImgData: function() {
		return renderers.tile.imgMap()[this.mapPos];
	}
});