var Life = cc.Node.extend({
	ctor : function (){
		this._super();
		this.position = -127.5;
		this.lifeUp = false;
		this.limit = 10;
		this.lifeArray = [];
		this.scheduleUpdate();
		for ( var i = 0 ; i < 4 ; i++) 
			this.createLife();
	},

	update : function (){
		if ( life < 4)
			this.lifeArray[ life ].setOpacity(0);
		if ( score >= this.limit){
			this.limit += 10;
			if ( life < 4 )
				this.lifePlus();
		}
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
		life -= 1;
		this.update();
	},

	lifePlus : function(){
//		console.log("lifeup");
//		if ( life <= 4 ){
		life += 1;
		this.lifeArray[ life - 1 ].setOpacity(255);
//		life += 1;
//		}
	}
});