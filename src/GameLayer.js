var GameLayer = cc.LayerColor.extend({
	init: function() {

		this._super( new cc.Color(22, 206, 215, 255 ));
		this.setPosition( new cc.Point( 0, 0 ) );


		this.bgAnimation = new bgAnimation();
		this.addChild (this.bgAnimation );
		this.bgAnimation.ctor();
		this.bgAnimation.setPosition( new cc.Point(1000,750));

		cc.audioEngine.playMusic( 'res/effects/waterSound.mp3', true );    

		this.startGame = new startGame();
		this.addChild( this.startGame );
		this.startGame.setPosition( new cc.Point(1000,750));

		this.buttonStart();

		this.gameStart = false;
		this.gameOver = false;

		return true;
	},

	buttonStart : function(){
		this.playButtonItem = new cc.MenuItemImage(
				'res/images/startButton.png',
				'res/images/startButtonClicked.png',
				function () {
					this.startGame.runAction( cc.FadeTo.create(1.5,0));
					this.playButtonItem.runAction( cc.FadeTo.create(1.5,0));
					if (this.gameStart == false){
						setTimeout(function() { 
							cc.director.runScene( new StartPlayScene() ); 	
						}, 2000);
					}

					this.gameStart = true;
//					cc.audioEngine.stopMusic( 'res/effects/MainMenuTheme.mp3' );
//					cc.audioEngine.playEffect( 'res/effects/click.mp3' );

				}, this);
		this.playButton = new cc.Menu( this.playButtonItem );
		this.playButton.setPosition( 1009 , 402.5  );
		this.addChild( this.playButton );
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