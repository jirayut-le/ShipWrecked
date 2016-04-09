var PressToStart = cc.Sprite.extend({
	ctor : function(){
		this._super();
		var animation = new cc.Animation.create();
		animation.addSpriteFrameWithFile( 'res/images/pressToStart_1.png' );
		animation.addSpriteFrameWithFile( 'res/images/pressToStart_2.png' );
		animation.setDelayPerUnit( 0.5 );
		var movingAction = cc.RepeatForever.create( cc.Animate.create( animation ) );
		this.runAction( movingAction );
	},
	
	start : function (){
		this.runAction( cc.FadeTo.create(0.7,0));
	}
	
});