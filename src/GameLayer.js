var GameLayer = cc.LayerColor.extend({
	init: function() {

		this._super( new cc.Color(22, 206, 215, 255 ));
		this.setPosition( new cc.Point( 0, 0 ) );

		this.createBgAnimation();

		cc.audioEngine.playMusic( 'res/effects/waterSound.mp3', true );    

		this.createLogoGame();
		this.createHowToPlayScene();
	
		return true;
	},

	createBgAnimation : function (){
		this.bgAnimation = new BgAnimation();
		this.addChild (this.bgAnimation );
		this.bgAnimation.ctor();
		this.bgAnimation.setPosition( new cc.Point(1000,750));
	},

	createLogoGame : function(){
		this.startGame = new startGame();
		this.addChild( this.startGame );
		this.startGame.setPosition( new cc.Point(1000,750));
	},

	createButtonStart : function(){
		this.playButtonItem = new cc.MenuItemImage(
				'res/images/startButton.png',
				'res/images/startButtonClicked.png',
				function () {
					cc.audioEngine.playEffect('res/effects/click.wav');
					cc.director.runScene(cc.TransitionPageTurn.create( 2.5 , new StartPlayScene()));
					this.playButton.setEnabled(false);

				}, this);

		this.playButton = new cc.Menu( this.playButtonItem );
		this.playButton.setPosition( 1009 , 402.5  );
		this.addChild( this.playButton );
	},

	createButtonHowToPlay : function(){
		this.howToPlayItem = new cc.MenuItemImage('res/images/howtoplaybutton.png','res/images/howtoplaybuttonclick.png',
				function (){
			this.enableHowToPlay();
		} , this);
		this.howToPlayButton = new cc.Menu( this.howToPlayItem );
		this.howToPlayButton.setPosition( 1000 , 100 );
		this.addChild( this.howToPlayButton );
	},
	
	createHowToPlayScene : function(){
		this.howToPlayScene = new HowToPlayScene();
		this.howToPlayScene.setPosition( new cc.Point( width/2 , height/2));
		this.howToPlayScene.setOpacity(0);
		this.addChild( this.howToPlayScene );
		this.createButtonStart();
		this.createButtonHowToPlay();
		this.createBackButton();
	},
	
	createBackButton : function (){
		this.backItem = new cc.MenuItemImage('res/images/howtoplaybackbutton.png','res/images/howtoplaybackbuttonclick.png',
				function(){
			this.enableGameLayer();
		} , this);
		this.backButton = new cc.Menu( this.backItem );
		this.backButton.setPosition( new cc.Point (1650, 150));
		this.backButton.setEnabled(false);
		this.backButton.setOpacity(0);
		this.addChild( this.backButton );
	},
	
	enableHowToPlay : function(){
		this.howToPlayButton.setEnabled(false);
		this.backButton.setEnabled(true);
		this.howToPlayButton.setOpacity(0);
		this.playButton.setEnabled(false);
		this.playButton.setOpacity(0);
		this.howToPlayScene.setOpacity(255);
		this.backButton.setOpacity(255);
		this.howToPlayScene.showBoatHowToPlay();
	},
	enableGameLayer : function(){
		this.howToPlayButton.setEnabled(true);
		this.howToPlayScene.setOpacity(0);
		this.backButton.setOpacity(0);
		this.howToPlayButton.setOpacity(255);
		this.playButton.setOpacity(255);
		this.playButton.setEnabled(true);
		this.backButton.setEnabled(false);
		this.howToPlayScene.hideBoatHowToPlay();
	}
	

});

var StartScene = cc.Scene.extend({
	onEnter: function() {
		this._super();
		var layer = new GameLayer();
		layer.init();
		this.addChild( layer );
	}
});