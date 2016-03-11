var GameLayer = cc.LayerColor.extend({
    init: function() {
        
        this._super( new cc.Color(22, 206, 215, 255 ));
        this.setPosition( new cc.Point( 0, 0 ) );
        
//        this.BgPlay = new BgPlay();
//        this.addChild( this.BgPlay );
//        this.BgPlay.setPosition( new cc.Point(1000,750));
        
        this.bgAnimation = new bgAnimation();
        this.addChild (this.bgAnimation );
        this.bgAnimation.ctor();
        this.bgAnimation.setPosition( new cc.Point(1000,750));
        
        cc.audioEngine.playMusic( 'res/effects/waterSound.mp3', true );
        
        
        
        this.startGame = new startGame();
        this.addChild( this.startGame );
        this.startGame.setPosition( new cc.Point(1000,750));
        
        this.startButton = new startButton();
        this.addChild( this.startButton );
        this.startButton.setPosition( new cc.Point(1009,402.5));
        
        
//        document.getElementsByName(elementName)
        
        window.onload = function() {
            document.getElementByName("startButton.js").onclick = function() {
            	this.removeChild(startGame);
            	console.log("check click button");
            };
         };
        
        return true;
    },
    addKeyboardHandlers: function() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed : function( keyCode, event ) {
                self.onKeyDown( keyCode, event );
            },
            onKeyReleased: function( keyCode, event ) {
                self.onKeyUp( keyCode, event );
            }
        }, this);
    },
 
    onKeyDown: function( keyCode, event ) {
        
        
    },
 
    onKeyUp: function( keyCode, event ) {
    }
    
    
    
});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
        
        
    }
});