var Boat = cc.Sprite.extend({
	ctor : function(){
		this._super();
		this.initWithFile("res/images/boat.png");
		this.velocity = speedBoat;
		this.degree = 0;
		this.start = false;
		this.move = 1;
	},

	update : function(){

		if ( this.start ){
			if ( this.move == 1){
				this.moveRight();
				this.rotateRight();
			} else if ( this.move == 2){
				this.moveLeft();
				this.rotateLeft();
			} 
		}

	},

	switchMove : function (){
		if ( this.move == 1)
			this.move = 2;
		else if ( this.move == 2)
			this.move = 1;
	},
	rotateRight : function(){
		if ( this.degree < 5 )
			this.degree += 0.5;

		if ( this.degree < 20)
			this.degree += 0.1;
		this.setRotation( this.degree );
	},

	rotateLeft : function(){
		if ( this.degree > -5 )
			this.degree -= 0.5;
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
		this.velocity += 0.3;
	}
});