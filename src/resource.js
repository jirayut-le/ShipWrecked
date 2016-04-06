var scoreNumber = []
for ( var i = 0 ; i < 10 ; i++){
	scoreNumber.push("res/images/score/score"+i+".png");
}


var res = {
    startGame_png : "res/images/startGame.png",
    BgPlay1_png : "res/images/BgPlay1.png",
    BgPlay2_png : "res/images/BgPlay2.png",
    BgPlay3_png : "res/images/BgPlay3.png",
    Sound_water_mp3 : "res/effects/waterSound.mp3",
    startButton_png : "res/images/startButton.png",
    boat_1_png : "res/images/boat_1.png",
    rock_png : "res/images/rock.png",
    seaweed_png : "res/images/seaweed.png",
    treasure_png : "res/images/treasure.png",
    fishing_net_png : "res/images/net.png",
    bg_effect_seaweed : "res/images/bgEffectSeaweed.png",
    bg_effect_fishingNet : "res/images/bgEffectFishingNet.png",
    statusbar : "res/images/statusBar.png"
    
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
