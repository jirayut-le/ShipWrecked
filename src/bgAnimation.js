var bgAnimation = cc.Sprite.extend({
	ctor : function(){
		this._super();
		var animation = new cc.Animation.create();
		animation.addSpriteFrameWithFile( 'res/images/bgPlay1.png' );
		animation.addSpriteFrameWithFile( 'res/images/bgPlay2.png' );
		animation.addSpriteFrameWithFile( 'res/images/bgPlay3.png' );
		animation.setDelayPerUnit( 0.5 );
		var movingAction = cc.RepeatForever.create( cc.Animate.create( animation ) );
		this.runAction( movingAction );
	}
	
});