var scoreNumber = [];
for ( var i = 0 ; i < 10 ; i++){
	scoreNumber.push("res/images/score/score"+i+".png");
}

var scoreGameOverNumber = [];
for ( var i = 0 ; i < 10 ; i++)
	scoreGameOverNumber.push("res/images/scoreGameOver/scoreGameOver" + i + ".png");


var res = {
    startGame_png : "res/images/startGame.png",
    BgPlay1_png : "res/images/BgPlay1.png",
    BgPlay2_png : "res/images/BgPlay2.png",
    BgPlay3_png : "res/images/BgPlay3.png",
    startButton_png : "res/images/startButton.png",
    boat_1_png : "res/images/boat_1.png",
    rock_png : "res/images/rock.png",
    seaweed_png : "res/images/seaweed.png",
    treasure_png : "res/images/treasure.png",
    fishing_net_png : "res/images/net.png",
    bg_effect_seaweed : "res/images/bgEffectSeaweed.png",
    bg_effect_fishingNet : "res/images/bgEffectFishingNet.png",
    bg_effect_rock : "res/images/bgEffectRock.png",
    statusbar : "res/images/statusBar.png",
    life : "res/images/life.png",
    pressToStart_1 : "res/images/pressToStart_1.png",
    pressToStart_2 : "res/images/pressToStart_2.png",
    bg_GameOver : "res/images/gameOverScene.png",
    button_restart_png : "res/images/gameOverRestart.png",
    button_restart_click_png : "res/images/gameOverRestartClick.png",
    button_home_png : "res/images/gameOverHome.png",
    button_home_click_png : "res/images/gameOverHomeClick.png",
    button_howToPlay_png : "res/images/howtoplaybutton.png",
    button_howToPlay_click_png : "res/images/howtoplaybuttonclick.png",
    
    sound_water_mp3 : "res/effects/waterSound.mp3",
    sound_hit_rock_wav : "res/effects/hitRock.wav",
    sound_click_wav : "res/effects/click.wav",
    sound_motor_boat_wav : "res/effects/motorBoat.wav",
    sound_hit_fishing_net_wav : "res/effects/hitFishingNet.wav",
    sound_boat_bomb_wav : "res/effects/boatBomb.wav",
    sound_hit_seaweed_mp3 : "res/effects/hitSeaweed.mp3",
    sound_collect_wav : "res/effects/collect.wav"
    
//    font_kilogram_otf : "res/fonts/KiloGram.otf"
    
    
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}

for (var i in scoreNumber){
	g_resources.push(scoreNumber[i]);
}

for (var i in scoreGameOverNumber)
	g_resources.push(scoreGameOverNumber[i]);
