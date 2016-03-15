var rock = cc.Sprite.extend({
	ctor : function (){
		this._super();
		this.initWithFile("res/images/rock.png");
		this.velocity = 5;
	},
	
	update : function(){
		this.moveDown();
	},
	
	random : function(){
		var randomNumber = Math.floor(Math.random()*7)+1;
		this.setPosition(new cc.Point(randomNumber * 250 ,2000));
	},
	
	moveDown : function(){
		var pos = this.getPosition();
		this.setPosition( new cc.Point( pos.x , pos.y - this.velocity));
	}
});