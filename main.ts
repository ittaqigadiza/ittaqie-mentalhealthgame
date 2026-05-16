controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Gadiza.setVelocity(70, -155)
    Gadiza.ay = 385
    music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (gameActive == true) {
        sprites.destroy(otherSprite)
        info.changeScoreBy(19)
        Gadiza.startEffect(effects.hearts, 790)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.setGameOverMessage(true, "YOUR MENTAL HEALTH IS GOOD!")
    game.setGameOverEffect(true, effects.confetti)
    game.setGameOverPlayable(true, music.melodyPlayable(music.magicWand), true)
    game.showLongText("TETAP JAGA LINGKUNGANMU", DialogLayout.Bottom)
    game.setGameOverScoringType(game.ScoringType.HighScore)
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (gameActive == true) {
        info.changeLifeBy(-20)
        sprites.destroy(otherSprite)
        music.play(music.createSoundEffect(WaveShape.Sine, 4144, 2476, 255, 0, 500, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        Robot_XARNCE.sayText("BEWARE!", 650, false)
    }
})
let Good: Sprite = null
let Robot_XARNCE: Sprite = null
let gameActive = false
let Gadiza: Sprite = null
scene.setBackgroundImage(assets.image`BG Ittaqie`)
tiles.setCurrentTilemap(tilemap`TILEMAP`)
Gadiza = sprites.create(assets.image`myImage`, SpriteKind.Player)
gameActive = true
controller.moveSprite(Gadiza)
Robot_XARNCE = sprites.create(assets.image`XARNCE`, SpriteKind.Player)
Gadiza.setPosition(55, 87)
Robot_XARNCE.follow(Gadiza)
Robot_XARNCE.setPosition(Gadiza.x, Gadiza.y)
scene.cameraFollowSprite(Gadiza)
info.setLife(100)
info.setScore(0)
let Bad = sprites.create(assets.image`Bad`, SpriteKind.Enemy)
Bad.setPosition(165, 46)
Bad.sayText("USELESS")
Bad = sprites.create(assets.image`Bad`, SpriteKind.Enemy)
Bad.sayText("FREAK")
Bad.setPosition(235, 55)
Bad = sprites.create(assets.image`Bad`, SpriteKind.Enemy)
Bad.setPosition(310, 70)
Bad.sayText("UGLY")
Bad = sprites.create(assets.image`Bad`, SpriteKind.Enemy)
Bad.setPosition(387, 87)
Bad.sayText("STUPID")
Bad = sprites.create(assets.image`Bad`, SpriteKind.Enemy)
Bad.setPosition(470, 35)
Bad.sayText("SHAME")
game.setGameOverMessage(false, "PROTECT YOUR MENTAL HEALTH!")
game.setGameOverEffect(false, effects.dissolve)
music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
game.onUpdateInterval(450, function () {
    Good = sprites.create(assets.image`Good`, SpriteKind.Food)
    Good.setPosition(randint(150, 3500), randint(20, 100))
})
