var EffectLifeUp = cc.Sprite.extend({
	ctor : function(){
		this._super();
		this.initWithFile('res/images/effectLife.png');
		this.setOpacity(0);
	},
	fade : function(){
		this.setOpacity(255);
		this.runAction( cc.FadeTo.create(1.5,0));
	}
})