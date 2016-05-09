var Seaweed = cc.Sprite.extend({
	ctor : function (){
		this._super();
		this.initWithFile("res/images/seaweed.png");
		this.effectNumber = 2;
	},

	closeTo: function( obj ) {
		var myPos = this.getPosition();
		var oPos = obj.getPosition();
		return ( ( Math.abs( myPos.x - oPos.x ) <= 60 ) &&
				( Math.abs( myPos.y - (oPos.y+95) ) <= 140 ) );
	},
	effect : function ( obj ){
		this.setPosition( -100 , this.getPosition().y);
		cc.audioEngine.playEffect('res/effects/hitSeaweed.mp3');
		
		obj.velocity = speedBoat;
//		var tempVelocity = obj.velocity;
		obj.velocity = 5;
		setTimeout(function() { 
			obj.velocity = speedBoat;
		}, 2000);
	}
});