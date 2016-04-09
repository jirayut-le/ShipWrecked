var GameLayer = cc.LayerColor.extend({
	init: function() {

		this._super( new cc.Color(22, 206, 215, 255 ));
		this.setPosition( new cc.Point( 0, 0 ) );

		this.createBgAnimation();

		cc.audioEngine.playMusic( 'res/effects/waterSound.mp3', true );    

		this.createLogoGame();
		this.createButtonStart();

		this.gameStart = false;
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
					this.startGame.runAction( cc.FadeTo.create(1.5,0));
					this.playButtonItem.runAction( cc.FadeTo.create(1.5,0));
					cc.audioEngine.playEffect('res/effects/click.wav');
					if (this.gameStart == false){
						setTimeout(function() { 
							cc.director.runScene( new StartPlayScene() ); 	
						}, 2000);
					}

					this.gameStart = true;

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