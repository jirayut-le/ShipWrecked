var Obstacle = cc.Sprite.extend({
	ctor : function(){
		this._super();
		this.velocity = 7;
		this.allObstacle = [];
		this.effectBg = [];
		this.createRandomObstacle();
		this.createEffect();
	},

	update : function(){
		this.moveDown();
	},

	createRandomObstacle : function(){

		for( var i = 0 ; i < 20 ; i++){
			this.plus = 1;
			this.multiple = 3;
			this.obstacle = [];
			for ( var  j = 0 ; j < 2 ; j++){
				this.numberRandomObstacle = Math.floor(Math.random()*10)+1;
				this.randomXPosition = Math.floor(Math.random()*this.multiple)+this.plus;
				this.randomObstacle = this.createObstacle( this.numberRandomObstacle ) ;
				this.randomObstacle.setPosition(new cc.Point( this.randomXPosition * 250 , 2000 + i*250));
				this.obstacle.push( this.randomObstacle );
				this.addChild( this.randomObstacle );
				this.plus += 3;
				this.multiple = 4;
			}
			this.allObstacle.push(this.obstacle);
		}
	},

	moveDown : function(){
		for (var i = 0 ; i < 20 ; i++){
			for (var j = 0 ; j < 2 ; j++){
				var pos = this.allObstacle[i][j].getPosition();
				this.allObstacle[i][j].setPosition( new cc.Point( pos.x , pos.y - speed ));
				if ( pos.y <= -10 )
					this.reXPosition();
			}
		}
	},

	reXPosition : function(){
		for (var i = 0 ; i < 20 ; i++){
			this.plus = 1;
			this.multiple = 3;
			for (var j = 0 ; j < 2 ; j++){
				if ( this.allObstacle[i][j].getPosition().y <= -10){
					this.randomXPosition = Math.floor(Math.random()*this.multiple)+this.plus;
					this.allObstacle[i][j].setPosition( this.randomXPosition* 250 , 5000 );
					this.plus += 3;
					this.multiple = 4;
				}
			}
		}
	},

	closeTo : function( obj ){
		for (var i = 0 ; i < 20 ; i++){
			for (var j = 0 ; j < 2 ; j++){
				if (this.allObstacle[i][j].closeTo( obj )){
					if ( this.allObstacle[i][j] instanceof Rock){
						this.allObstacle[i][j].effect();
//						this.bgEffectRock.fade();
					} else 
						this.allObstacle[i][j].effect( obj );

					if ( !(this.allObstacle[i][j] instanceof Treasure) )
						this.effectBg[ this.allObstacle[i][j].effectNumber ].fade();
				}
			}
		}
	},

	createObstacle : function (number){
		if (number <= 4)
			return new Rock();
		else if ( number > 4 && number <= 6 )
			return new Seaweed();
		else if ( number > 6 && number <= 8 )
			return new FishingNet();
		else 
			return new Treasure();
	},

	createEffect : function (){
		this.createBgEffectRock();
		this.createBgEffectFishingNet();
		this.createBgEffectSeaweed();
	},

	createBgEffectRock : function (){
		this.bgEffectRock = new BgEffectRock();
		this.effectBg.push( this.bgEffectRock )
		this.addChild( this.bgEffectRock );
		this.bgEffectRock.setPosition( new cc.Point( width/2 , height/2 ));
	},
	createBgEffectFishingNet : function(){
		this.bgEffectFishingNet = new BgEffectFishingNet();
		this.effectBg.push( this.bgEffectFishingNet )
		this.addChild( this.bgEffectFishingNet ); 
		this.bgEffectFishingNet.setPosition( new cc.Point ( width/2 , height/2 ));
	},

	createBgEffectSeaweed : function(){
		this.bgEffectSeaweed = new BgEffectSeaweed();
		this.effectBg.push( this.bgEffectSeaweed )
		this.addChild( this.bgEffectSeaweed ); 
		this.bgEffectSeaweed.setPosition( new cc.Point ( width/2 , height/2 ));
	}


});