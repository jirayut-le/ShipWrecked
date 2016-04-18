var GameOverScene = cc.LayerColor.extend ({
	init : function (){
		this._super();
		this.bgGameOver = new BgGameOver();
		this.addChild( this.bgGameOver );
		this.bgGameOver.setPosition( new cc.Point( width/2 , height/2));
		this.buttonRestart();
		this.buttonHome();
		this.position = 1123;
		this.scoreGameOverArray = [];
		this.createScoreLabel();
	},

	createScoreLabel : function (){
		for (var i = 0 ; i < 4 ; i++){
			this.createDigit();
			if ( i < 3)
				this.scoreGameOverArray[i].initWithFile( scoreGameOverNumber[ parseInt( score/(Math.pow(10,4-1-i)) ) ]);
			else 
				this.scoreGameOverArray[i].initWithFile( scoreGameOverNumber[ score%10 ] ); 
		}

	},

	createDigit : function(){
		this.digit = cc.Sprite.create();
		this.digit.setPosition( cc.p ( this.position , 764.27 ));
		this.digit.initWithFile( scoreGameOverNumber[0] );
		this.addChild( this.digit );
		this.scoreGameOverArray.push( this.digit );
		this.position += 115;
	},

	buttonRestart : function(){
		this.restartButtonItem = new cc.MenuItemImage(
				'res/images/gameOverRestart.png',
				'res/images/gameOverRestartClick.png',
				function () {
					cc.audioEngine.playEffect('res/effects/click.wav');
					cc.director.runScene( new StartPlayScene() ); 	

				}, this);
		this.restartButton = new cc.Menu( this.restartButtonItem );
		this.restartButton.setPosition( 1331 , 378.5  );
		this.addChild( this.restartButton );
	},

	buttonHome : function (){
		this.homeButtonItem = new cc.MenuItemImage(
				'res/images/gameOverHome.png',
				'res/images/gameOverHomeClick.png',
				function () {
					cc.audioEngine.playEffect('res/effects/click.wav');
					cc.director.runScene( new StartScene() ); 	

				}, this);
		this.homeButton = new cc.Menu( this.homeButtonItem );
		this.homeButton.setPosition( 700 , 378.5  );
		this.addChild( this.homeButton );
	}
});

var StartGameOverScene = cc.Scene.extend({
	onEnter: function() {
		this._super();
		var layer = new GameOverScene();
		layer.init();
		this.addChild( layer );
	}
});