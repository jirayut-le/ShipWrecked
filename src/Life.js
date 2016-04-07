var Life = cc.Node.extend({
	ctor : function (){
		this._super();
		this.lifeRemain = 4 ;
		this.position = -127.5;
		this.lifeArray = [];
		for ( var i = 0 ; i < 4 ; i++) 
			this.createLife();
	},

	update : function (){
		if ( this.lifeRemain < 4)
			this.lifeArray[ this.lifeRemain ].runAction( cc.FadeTo.create(1,0));
	},

	createLife : function(){
		this.life = cc.Sprite.create();
		this.life.setPosition( this.position , 0 );
		this.life.initWithFile( 'res/images/life.png');
		this.addChild( this.life );
		this.lifeArray.push( this.life );
		this.position += 85;
	},

	damage : function(){
		this.lifeRemain -= 1;
		this.update();
	}

})