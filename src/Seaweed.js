var Seaweed = cc.Sprite.extend({
	ctor : function (){
		this._super();
		this.initWithFile("res/images/seaweed.png");
		this.effectNumber = 2;
		this.velocity = 7;
		this.numberPosition;
		this.XPosition;
		this.start = false;
	},
	
	update : function(){
		if (this.start)
			this.moveDown();
	},
	
	randomNumberOfPositionX : function(){
		return Math.floor(Math.random()*7)+1;
	},
	
	setPositionObstacle : function(){
		this.setPosition(new cc.Point( this.XPosition * 250 , 2000 + this.numberPosition*250));
	},
	
	moveDown : function(){
		var pos = this.getPosition();
		this.setPosition( new cc.Point( pos.x , pos.y - this.velocity));
		if( pos.y <= -10 )
			this.setPosition( this.XPosition * 250 , 5000 );
	},
	closeTo: function( obj ) {
		var myPos = this.getPosition();
		var oPos = obj.getPosition();
		return ( ( Math.abs( myPos.x - oPos.x ) <= 60 ) &&
				( Math.abs( myPos.y - (oPos.y+95) ) <= 140 ) );
	},
	effect : function ( obj ){
		cc.audioEngine.playEffect('res/effects/hitSeaweed.mp3');
		var tempVelocity = obj.velocity;
		this.setPosition( -100 , this.getPosition().y);
		obj.velocity = 5;
		setTimeout(function() { 
			obj.velocity = tempVelocity;
		}, 2000);
	},
	upSpeed : function(){
		this.velocity += 1;
	}
});