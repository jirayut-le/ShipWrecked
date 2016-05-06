var BgEffectSeaweed = cc.Sprite.extend ({
	ctor : function (){
		this._super();
		this.initWithFile('res/images/bgEffectSeaweed.png');
		this.setOpacity(0);
	},

	fade : function(){
		this.setOpacity(255);
		this.runAction( cc.FadeTo.create(2,0));
	}
});