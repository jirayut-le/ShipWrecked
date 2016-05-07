var PlaySceneLayer = cc.LayerColor.extend({

	init : function() {
		this._super(new cc.Color(22, 206, 215, 255));
		this.setPosition(new cc.Point(0, 0));
		this.obstacles = [];

		this.createBgAnimation();
		this.createPressToStart();
		this.createBoat();
		this.createStatusBar();
		this.Obstacle = new Obstacle();	
		this.addChild( this.Obstacle  );
	
		this.createPause();

		this.hitSeaweedFirstTime = false;
		this.hitFishingNetFirstTime = false;
		this.hitRockFirstTime = false;
		this.gameOver = false ;

		this.addKeyboardHandlers();
		this.scheduleUpdate();
	},

	update : function (){
		if ( life == 0 && this.gameOver == false){
			this.gameOver = true;
			this.pauseGame();
			this.showGameOver();
		}
		this.Obstacle.closeTo( this.boat  );
	},

	createBgAnimation : function(){
		this.bgAnimation = new BgAnimation();
		this.addChild( this.bgAnimation );
		this.bgAnimation.setPosition(new cc.Point( 1000, 750 ));
	},

	createPressToStart : function (){
		this.PressToStart = new PressToStart();
		this.addChild( this.PressToStart , 4 );
		this.PressToStart.setPosition( new cc.Point( 993 , 782 ));
	},

	createBoat : function(){
		this.boat = new Boat();
		this.addChild( this.boat , 1 );
		this.boat.scheduleUpdate();
		this.boat.setPosition(new cc.Point( 1000 , 70 ));
	},

	createStatusBar : function(){
		this.StatusBar = new StatusBar();
		this.addChild( this.StatusBar , 2);
		this.StatusBar.setPosition( new cc.Point ( 1000 , 1372.5 ));

		this.Score = new Score();
		this.addChild( this.Score , 3 );
		this.Score.setPosition( new cc.Point ( 1130 , 1420 ));
		this.Score.scheduleUpdate();

		this.Life = new Life();
		this.addChild( this.Life , 3 );
		this.Life.setPosition( new cc.Point ( 1767.5 , 1423 ));
	},

	createPause : function(){
		this.pausePic = new Pause();
		this.pausePic.setPosition( new cc.Point( width/2 , height/2 ));
		this.pausePic.setOpacity(0);
		this.addChild(this.pausePic ,1);
	},

	addKeyboardHandlers : function() {
		var self = this;
		cc.eventManager.addListener({
			event : cc.EventListener.KEYBOARD,
			onKeyPressed : function( keyCode , event ) {
				self.onKeyDown( keyCode , event );
			},
			onKeyReleased : function(keyCode, event) {
				self.onKeyUp( keyCode , event );
			}
		}, this);
	},

	onKeyDown : function(keyCode, event) {
		if (keyCode == cc.KEY.space && this.gameOver == false ) {
			this.Obstacle.scheduleUpdate();
			this.pausePic.setOpacity(0);
			this.PressToStart.start();
			this.boat.start = true;
			this.boat.switchMove();
		}

		if (keyCode == cc.KEY.p) {
			this.pauseGame();
			this.pausePic.setOpacity(255);
		}

	},

	onKeyUp : function( keyCode , event ) {},

	pauseGame : function (){
		this.boat.start = false;
		this.Obstacle.unscheduleUpdate();
	},

	showGameOver : function (){
		cc.audioEngine.playEffect( 'res/effects/boatBomb.wav' );
		cc.director.runScene(cc.TransitionTurnOffTiles.create( 2.5 , new StartGameOverScene() ));
	}

});

var StartPlayScene = cc.Scene.extend({
	onEnter : function() {
		this._super();
		var playScene = new PlaySceneLayer();
		playScene.init();
		this.addChild( playScene );
	}
});

var score = 0 ;
var life = 4;
var speed = 7;