var BgEffectFishingNet = cc.Sprite.extend({
	ctor : function (){
		this._super();
		this.initWithFile( 'res/images/bgEffectFishingNet.png');
	},
	fadeOut : function(){
		this.runAction( cc.FadeTo.create(2,0));

	},

	fadeIn : function(){
		this.setOpacity(255);
	}
});
