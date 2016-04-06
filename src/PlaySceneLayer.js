var PlaySceneLayer = cc.LayerColor.extend({

	init : function() {
		this._super(new cc.Color(22, 206, 215, 255));
		this.setPosition(new cc.Point(0, 0));

		this.bgAnimation = new bgAnimation();
		this.addChild(this.bgAnimation);
		this.bgAnimation.setPosition(new cc.Point(1000, 750));

		this.boat_1 = new boat();
		this.addChild(this.boat_1, 2);
		this.boat_1.scheduleUpdate();
		this.boat_1.setPosition(new cc.Point(1000, 5));

		this.StatusBar = new StatusBar();
		this.addChild( this.StatusBar , 1);
		this.StatusBar.setPosition( new cc.Point (1000 , 1408 ));

		this.hitSeaweedFirstTime = false;
		this.hitFishingNetFirstTime = false;

		this.obstacles = [];

		this.createObstacles();
		 
		this.addKeyboardHandlers();

		this.scheduleUpdate();
	},

	update : function (){
		for (var i = 0 ; i < this.obstacles.length ; i++){
			if ( this.obstacles[i].closeTo( this.boat_1 )){
				if (this.obstacles[i] instanceof rock ){
					this.obstacles[i].effect( this.boat_1 );
					this.pauseGame();

				} else if ( this.obstacles[i] instanceof Seaweed )
					this.effectWhenHitSeaweed( this.obstacles[i] );

				else if ( this.obstacles[i] instanceof Treasure)
					this.obstacles[i].runAction( cc.FadeTo.create(0,0));

				else if ( this.obstacles[i] instanceof FishingNet ){
					this.effectWhenHitFishingNet( this.obstacles[i] );
				}

			}
		}

	},

	effectWhenHitSeaweed : function ( obj ){
		if (!this.hitSeaweedFirstTime ){
			this.createBgEffectSeaweed();
			this.hitSeaweedFirstTime = true;
		} else {
			this.bgEffectSeaweed.fadeIn();
		}
		obj.effect( this.boat_1 );
		this.bgEffectSeaweed.fadeOut();

	},

	effectWhenHitFishingNet : function ( obj ){
		if (!this.hitFishingNetFirstTime ){
			this.createBgEffectFishingNet();
			this.hitFishingNetFirstTime = true;
		} else {
			this.bgEffectFishingNet.fadeIn();
		}
		obj.effect( this.boat_1 );
		this.bgEffectFishingNet.fadeOut();


	},

	createBgEffectFishingNet : function(){
		this.bgEffectFishingNet = new BgEffectFishingNet();
		this.addChild( this.bgEffectFishingNet ); 
		this.bgEffectFishingNet.setPosition( new cc.Point ( width/2 , height/2 ));
	},

	createBgEffectSeaweed : function(){
		this.bgEffectSeaweed = new BgEffectSeaweed();
		this.addChild( this.bgEffectSeaweed ); 
		this.bgEffectSeaweed.setPosition( new cc.Point ( width/2 , height/2 ));
	},

	createObstacles : function() {
		for (var i = 0; i < 20; i++) {
			if ( i % 2 == 1)
				this.createRocks(i);
			else if ( i == 2 || i == 6 || i == 12)
				this.createSeaweed(i);
			else if ( i == 4 || i == 10 || i == 18)
				this.createFishingNet(i);
			else if ( i == 8 || i == 16)
				this.createTreasure(i);
		}
	},

	createRocks : function(number) {
		this.rock = new rock();
		this.addChild( this.rock );
		this.obstacles.push( this.rock );
		this.rock.numberPosition = number;
		this.rock.randomPosition();
		this.rock.scheduleUpdate();
	},

	createSeaweed : function(number){
		this.Seaweed = new Seaweed();
		this.addChild( this.Seaweed );
		this.obstacles.push( this.Seaweed );
		this.Seaweed.numberPosition = number;
		this.Seaweed.randomPosition();
		this.Seaweed.scheduleUpdate();
	},

	createFishingNet : function (number){
		this.FishingNet = new FishingNet();
		this.addChild( this.FishingNet );
		this.obstacles.push( this.FishingNet );
		this.FishingNet.numberPosition = number;
		this.FishingNet.randomPosition();
		this.FishingNet.scheduleUpdate();
	},

	createTreasure : function (number){
		this.Treasure = new Treasure();
		this.addChild( this.Treasure );
		this.obstacles.push( this.Treasure );
		this.Treasure.numberPosition = number;
		this.Treasure.randomPosition();
		this.Treasure.scheduleUpdate();
	},

	addKeyboardHandlers : function() {
		var self = this;
		cc.eventManager.addListener({
			event : cc.EventListener.KEYBOARD,
			onKeyPressed : function(keyCode, event) {
				self.onKeyDown(keyCode, event);
			},
			onKeyReleased : function(keyCode, event) {
				self.onKeyUp(keyCode, event);
			}
		}, this);
	},

	onKeyDown : function(keyCode, event) {
		if (keyCode == cc.KEY.space) {
			for (var i = 0; i < this.obstacles.length; i++) {
				this.obstacles[i].start = true;
			}
			this.checkMoveRight = true;
			if (this.boat_1.checkMoveRight == false
					&& this.boat_1.checkMoveLeft == true) {
				this.boat_1.checkMoveLeft = false;
				this.boat_1.checkMoveRight = true;
			} else {
				this.boat_1.checkMoveLeft = true;
				this.boat_1.checkMoveRight = false;
			}
		}

		if (keyCode == cc.KEY.p) {
			this.pauseGame();
		}

	},

	onKeyUp : function(keyCode, event) {
	},

	pauseGame : function (){
		this.boat_1.checkMoveLeft = false;
		this.boat_1.checkMoveRight = false;
		for (var i = 0 ; i < this.obstacles.length ; i++){
			this.obstacles[i].start = false;
		}
	}

});

var StartPlayScene = cc.Scene.extend({
	onEnter : function() {
		this._super();
		var playScene = new PlaySceneLayer();
		playScene.init();
		this.addChild(playScene);
	}
});