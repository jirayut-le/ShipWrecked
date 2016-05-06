var BgEffectRock = cc.Sprite.extend ({
	ctor : function (){
		this._super();
		this.initWithFile( 'res/images/bgEffectRock.png');
		this.setOpacity(0);
	},
	fade : function(){
		this.setOpacity(255);
		this.runAction( cc.FadeTo.create(2,0));
	}
});