var Score = cc.Node.extend({
	ctor : function(){
		this._super();
		this.position = -90;
		this.digitArray = [];
		for (var i = 0 ; i < 4 ; i++)
			this.createDigit();

	},
	update : function(){
		
		for (var i = 0 ; i < this.digitArray.length ; i++){
			if ( i < 3)
				this.digitArray[i].initWithFile( scoreNumber[ parseInt( score/(Math.pow(10,4-1-i)) ) ]);
			else 
				this.digitArray[i].initWithFile( scoreNumber[ score%10 ] ); 
		}

	},

	createDigit : function(){
		this.digit = cc.Sprite.create();
		this.digit.setPosition( cc.p ( this.position , 5));
		this.digit.initWithFile( scoreNumber[0] );
		this.addChild( this.digit );
		this.digitArray.push( this.digit );
		this.position += 60;
	},

	getScore : function(){
		this.score += 1;
	}

});