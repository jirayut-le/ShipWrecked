var PlaySceneLayer = cc.LayerColor.extend({

	init : function(){
		this._super( new cc.Color(22, 206, 215, 255 ));
		this.setPosition( new cc.Point( 0, 0 ) );

		this.bgAnimation = new bgAnimation();
		this.addChild( this.bgAnimation );
		this.bgAnimation.setPosition( new cc.Point(1000,750));

		this.boat_1 = new boat();
		this.addChild( this.boat_1 );
		this.boat_1.scheduleUpdate();
		this.boat_1.setPosition ( new cc.Point(1000,5));

//		this.rock = new rock();
//		this.addChild( this.rock );
//		this.rock.scheduleUpdate();
		
		this.createObstacles();

		this.obstacles = [];



		this.addKeyboardHandlers();
	},

	createObstacles : function(){
		for ( var i = 0 ; i < 10 ; i++){
			this.createRocks(i);
		}
	},
	
	createRocks : function( number ){
		this.rock = new rock();
		this.addChild( this.rock );
		this.rock.numberPosition = number;
		this.rock.randomPosition();
		this.rock.scheduleUpdate();
	},
	

	addKeyboardHandlers: function() {
		var self = this;
		cc.eventManager.addListener({
			event: cc.EventListener.KEYBOARD,
			onKeyPressed : function( keyCode, event ) {
				self.onKeyDown( keyCode, event );
			},
			onKeyReleased: function( keyCode, event ) {
				self.onKeyUp( keyCode, event );
			}
		}, this);
	},

	onKeyDown: function( keyCode, event ) {
		if ( keyCode == cc.KEY.space ){
			for (var i = 0 ; i < 0 ; i++){
				this.obstacles[i].start = true;
			}
			this.checkMoveRight = true;
			if (this.boat_1.checkMoveRight == false && this.boat_1.checkMoveLeft == true ){
				this.boat_1.checkMoveLeft = false;
				this.boat_1.checkMoveRight = true;
			} else {
				this.boat_1.checkMoveLeft = true;
				this.boat_1.checkMoveRight = false;
			}
		}

		if ( keyCode == cc.KEY.p){
			this.boat_1.checkMoveLeft = false;
			this.boat_1.checkMoveRight = false;
		}

	},

	onKeyUp: function( keyCode, event ) {
	}

});

var StartPlayScene = cc.Scene.extend({
	onEnter: function() {
		this._super();
		var playScene = new PlaySceneLayer();
		playScene.init();
		this.addChild( playScene );
	}
});