var FishingNet = cc.Sprite.extend({
	ctor : function (){
		this._super();
		this.initWithFile("res/images/net.png");
		this.effectNumber = 1;	
	},
	closeTo: function( obj ) {
		var myPos = this.getPosition();
		var oPos = obj.getPosition();
		return ( ( Math.abs( myPos.x - oPos.x ) <= 80 ) &&
				( Math.abs( myPos.y - (oPos.y+95) ) <= 100 ) );
	},
	effect : function( obj ){
		cc.audioEngine.playEffect('res/effects/hitFishingNet.wav');
		var tempVelocity = obj.velocity;
		this.setPosition( -100 , this.getPosition().y);
		obj.velocity = 0;
		setTimeout(function() { 
			obj.velocity = tempVelocity;
		}, 2000);
	}
});