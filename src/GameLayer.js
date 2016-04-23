var GameLayer = cc.LayerColor.extend({
	init: function() {

		this._super( new cc.Color(22, 206, 215, 255 ));
		this.setPosition( new cc.Point( 0, 0 ) );

		this.createBgAnimation();

		cc.audioEngine.playMusic( 'res/effects/waterSound.mp3', true );    

		this.createLogoGame();
		this.createButtonStart();
		this.createButtonHowToPlay();

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
			this.howToPlayButton.setEnabled(false);
		} , this);
		this.howToPlayButton = new cc.Menu( this.howToPlayItem );
		this.howToPlayButton.setPosition( 1000 , 100 );
		this.addChild( this.howToPlayButton );
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