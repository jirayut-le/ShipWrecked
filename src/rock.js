var Rock = cc.Sprite.extend({
	ctor : function (){
		this._super();
		this.initWithFile("res/images/rock.png");
		this.effectNumber = 0;
	},
	
	closeTo: function( obj ) {
		var myPos = this.getPosition();
		var oPos = obj.getPosition();
		return ( ( Math.abs( myPos.x - oPos.x ) <= 110 ) &&
				( Math.abs( myPos.y - (oPos.y+95) ) <= 110 ) );
	},
	
	effect : function(){
		life -=1;
		cc.audioEngine.playEffect('res/effects/hitRock.wav');
		this.setPosition( -100 , this.getPosition().y );
	}
});