var PlaySceneLayer = cc.LayerColor.extend({

	init : function() {
		this._super(new cc.Color(22, 206, 215, 255));
		this.setPosition(new cc.Point(0, 0));
		this.obstacles = [];
		
		this.createBgAnimation();
		this.createPressToStart();
		this.createBoat();
		this.createStatusBar();
		this.createObstacles();

		this.hitSeaweedFirstTime = false;
		this.hitFishingNetFirstTime = false;
		this.hitRockFirstTime = false;
		this.gameOver = false ;

		this.addKeyboardHandlers();
		this.scheduleUpdate();
	},

	update : function (){
		if ( this.Life.lifeRemain == 0 && this.gameOver == false){
			this.gameOver = true;
			this.pauseGame();
			this.showGameOver();
		}
		for (var i = 0 ; i < this.obstacles.length && this.gameOver == false ; i++){
			if ( this.obstacles[i].closeTo( this.boat )){

				if (this.obstacles[i] instanceof Rock )
					this.effectWhenHitRock( this.obstacles[i] );

				else if ( this.obstacles[i] instanceof Seaweed )
					this.effectWhenHitSeaweed( this.obstacles[i] );

				else if ( this.obstacles[i] instanceof Treasure){
					this.effectWhenHitTreasure( this.obstacles[i] );
					this.upSpeed();
				}

				else if ( this.obstacles[i] instanceof FishingNet )
					this.effectWhenHitFishingNet( this.obstacles[i] );

			}
		}

	},
	
	upSpeed : function (){
		for (var i = 0 ; i < this.obstacles.length ;i++)
			this.obstacles[i].upSpeed();
		this.boat.upSpeed();
	},

	effectWhenHitSeaweed : function ( obj ){
		if (!this.hitSeaweedFirstTime ){
			this.createBgEffectSeaweed();
			this.hitSeaweedFirstTime = true;
		} else {
			this.bgEffectSeaweed.fadeIn();
		}
		obj.effect( this.boat );
		this.bgEffectSeaweed.fadeOut();

	},

	effectWhenHitFishingNet : function ( obj ){
		if (!this.hitFishingNetFirstTime ){
			this.createBgEffectFishingNet();
			this.hitFishingNetFirstTime = true;
		} else {
			this.bgEffectFishingNet.fadeIn();
		}
		obj.effect( this.boat );
		this.bgEffectFishingNet.fadeOut();

	},

	effectWhenHitTreasure : function ( obj ){
		obj.effect();
		this.Score.getScore();
		score = this.Score.score;
	},

	effectWhenHitRock : function ( obj ){
		if (!this.hitRockFirstTime ){
			this.createBgEffectRock();
			this.hitRockFirstTime = true;
		} else {
			this.bgEffectRock.fadeIn();
		}
		obj.effect();
		this.bgEffectRock.fadeOut();
		this.Life.damage();
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
	
	createBgEffectRock : function (){
		this.bgEffectRock = new BgEffectRock();
		this.addChild( this.bgEffectRock );
		this.bgEffectRock.setPosition( new cc.Point( width/2 , height/2));
	},

	createBgAnimation : function(){
		this.bgAnimation = new BgAnimation();
		this.addChild(this.bgAnimation);
		this.bgAnimation.setPosition(new cc.Point(1000, 750));
	},
	
	createPressToStart : function (){
		this.PressToStart = new PressToStart();
		this.addChild( this.PressToStart , 4 );
		this.PressToStart.setPosition( new cc.Point( 993 , 782 ));
	},

	createBoat : function(){
		this.boat = new Boat();
		this.addChild(this.boat, 1);
		this.boat.scheduleUpdate();
		this.boat.setPosition(new cc.Point(1000, 5));
	},

	createStatusBar : function(){
		this.StatusBar = new StatusBar();
		this.addChild( this.StatusBar , 2);
		this.StatusBar.setPosition( new cc.Point (1000 , 1408 ));

		this.Score = new Score();
		this.addChild( this.Score , 3 );
		this.Score.setPosition( new cc.Point ( 1130 , 1420));
		this.Score.scheduleUpdate();

		this.Life = new Life();
		this.addChild( this.Life , 3 );
		this.Life.setPosition( new cc.Point ( 1767.5 , 1423 ));
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
		this.rock = new Rock();
		this.addChild( this.rock );
		this.obstacles.push( this.rock );
		this.rock.numberPosition = number;
		this.rock.randomPosition();
		this.rock.scheduleUpdate();
	},

	createSeaweed : function(number){
		this.seaweed = new Seaweed();
		this.addChild( this.seaweed );
		this.obstacles.push( this.seaweed );
		this.seaweed.numberPosition = number;
		this.seaweed.randomPosition();
		this.seaweed.scheduleUpdate();
	},

	createFishingNet : function (number){
		this.fishingNet = new FishingNet();
		this.addChild( this.fishingNet );
		this.obstacles.push( this.fishingNet );
		this.fishingNet.numberPosition = number;
		this.fishingNet.randomPosition();
		this.fishingNet.scheduleUpdate();
	},

	createTreasure : function (number){
		this.treasure = new Treasure();
		this.addChild( this.treasure );
		this.obstacles.push( this.treasure );
		this.treasure.numberPosition = number;
		this.treasure.randomPosition();
		this.treasure.scheduleUpdate();
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
		if (keyCode == cc.KEY.space && this.gameOver == false ) {
			this.PressToStart.start();
			for (var i = 0; i < this.obstacles.length; i++) {
				this.obstacles[i].start = true;
			}
			
			this.boat.start = true;
			this.boat.switchMove();
		}

		if (keyCode == cc.KEY.p) {
			this.pauseGame();
		}

	},

	onKeyUp : function(keyCode, event) {
	},

	pauseGame : function (){
		this.boat.start = false;
		for (var i = 0 ; i < this.obstacles.length ; i++){
			this.obstacles[i].start = false;
		}
	},
	
	showGameOver : function (){
		cc.audioEngine.playEffect('res/effects/boatBomb.wav');
//		setTimeout(function() { 
			cc.director.runScene(cc.TransitionTurnOffTiles.create( 3 , new StartGameOverScene() ));
//		}, 1500);
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

var score = 0 ;