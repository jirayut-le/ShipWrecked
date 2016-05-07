var HowToPlayScene = cc.Sprite.extend({
	ctor : function(){
		this._super();
		this.initWithFile('res/images/howtoplayscene.png');
		this.createHowToPlayBoat();
		this.addKeyboardHandlers();
	},
	
	createHowToPlayBoat : function(){
		this.boatHowToPlay = new Boat();
		this.boatHowToPlay.setPosition( new cc.Point(1000,500));
		this.boatHowToPlay.start = true;
		this.boatHowToPlay.setOpacity(0);
		this.boatHowToPlay.scheduleUpdate();
		this.addChild( this.boatHowToPlay );
	},
	
	addKeyboardHandlers : function(){
		var self = this;
		cc.eventManager.addListener({
			event : cc.EventListener.KEYBOARD,
			onKeyPressed : function(keyCode, event) {
				self.onKeyDown(keyCode, event);
			},
			onKeyReleased : function(keyCode, event) {}
		}, this);
	}, 
	onKeyDown : function(keyCode, event){
		if (keyCode == cc.KEY.space)
			this.boatHowToPlay.switchMove();
	},
	
	hideBoatHowToPlay : function (){
		this.boatHowToPlay.start = false;
		this.boatHowToPlay.setOpacity(0);
	},
	showBoatHowToPlay : function (){
		this.boatHowToPlay.start = true;
		this.boatHowToPlay.setOpacity(255);
	}
	
})