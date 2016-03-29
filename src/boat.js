var boat = cc.Sprite.extend({
	ctor : function(){
		this._super();
		this.initWithFile("res/images/boat_2.png");
		this.velocity = 10;
		this.degree = 0;
		this.checkMoveRight = false;
		this.checkMoveLeft = false;
		this.gameOver = true;
	},

	update : function(){
		if ( this.checkMoveRight ){
			this.moveRight();
			this.rotateRight();
		} else if (this.checkMoveLeft ){
			this.moveLeft();
			this.rotateLeft();
		}

	},
	rotateRight : function(){
		if ( this.degree < 20)
			this.degree += 0.1;
		this.setRotation( this.degree );
	},

	rotateLeft : function(){
		if ( this.degree > -20 )
			this.degree -= 0.1;
		this.setRotation( this.degree );

	},

	moveRight : function(){
		var pos = this.getPosition();
		if ( pos.x < width )
			this.setPosition( new cc.Point( pos.x + this.velocity ,pos.y));
		else
			this.setPosition( new cc.Point( 0 , pos.y));
	},

	moveLeft : function(){
		var pos = this.getPosition();
		if (pos.x > 0)
			this.setPosition( new cc.Point( pos.x - this.velocity , pos.y ));
		else 
			this.setPosition( new cc.Point( width , pos.y));
	},

	upSpeed : function(){

	}
});