var Treasure = cc.Sprite.extend({
	ctor : function (){
		this._super();
		this.initWithFile("res/images/treasure.png");
	},
	closeTo: function( obj ) {
		var myPos = this.getPosition();
		var oPos = obj.getPosition();
		return ( ( Math.abs( myPos.x - oPos.x ) <= 110 ) &&
				( Math.abs( myPos.y - (oPos.y+95) ) <= 100 ) );
	},
	effect : function (){
		score += 1;
		speed += 0.5;
		cc.audioEngine.playEffect('res/effects/collect.wav');
		this.setPosition( -100 , this.getPosition().y);
	},
});