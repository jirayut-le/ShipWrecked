var Score = cc.Node.extend({
	ctor : function(){
		this._super();
		this.score = 0 ;
		
		this.firstDigit = cc.Sprite.create();
		this.firstDigit.setPosition( cc.p( -90 , 0 ) );
		this.addChild( this.firstDigit );
		
		this.secondDigit = cc.Sprite.create();
		this.secondDigit.setPosition( cc.p( -30 , 0 ) );
		this.addChild( this.secondDigit );
		
		this.thirdDigit = cc.Sprite.create();
		this.thirdDigit.setPosition( cc.p( 30, 0 ) );
		this.addChild( this.thirdDigit );
		
		this.fouthDigit = cc.Sprite.create();
		this.fouthDigit.setPosition( cc.p( 90, 0 ) );
		this.addChild( this.fouthDigit );
		
		this.firstDigit.initWithFile( scoreNumber[0] );
		this.secondDigit.initWithFile( scoreNumber[0] );
		this.thirdDigit.initWithFile( scoreNumber[0] );
		this.fouthDigit.initWithFile( scoreNumber[0] );
		
	},
	update : function(){
		this.firstDigit.initWithFile( scoreNumber[ parseInt( this.score/1000 ) ]);
		this.secondDigit.initWithFile( scoreNumber[ parseInt( this.score/100 ) ]);
		this.thirdDigit.initWithFile( scoreNumber[ parseInt( this.score/10 ) ]);
		this.fouthDigit.initWithFile( scoreNumber[ this.score%10 ]);
	}
	
});