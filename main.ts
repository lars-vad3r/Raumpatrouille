controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`rockets`, Raumpatrouille, 0, -100)
    projectile.startEffect(effects.fire, 1000)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprite.destroy(effects.disintegrate, 200)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(-10)
    sprite.destroy()
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.disintegrate, 200)
})
let enemyUFO: Sprite = null
let spaceDonut: Sprite = null
let projectile: Sprite = null
let Raumpatrouille: Sprite = null
info.setScore(0)
effects.starField.startScreenEffect()
Raumpatrouille = sprites.create(assets.image`Raumpatrouille`, SpriteKind.Player)
controller.moveSprite(Raumpatrouille)
Raumpatrouille.setFlag(SpriteFlag.StayInScreen, true)
game.onUpdateInterval(5000, function () {
    spaceDonut = sprites.createProjectileFromSide(assets.image`Spacedonut`, 0, 50)
    spaceDonut.x = randint(5, 155)
    spaceDonut.vy = randint(50, 100)
    spaceDonut.setKind(SpriteKind.Food)
})
game.onUpdateInterval(1000, function () {
    enemyUFO = sprites.createProjectileFromSide(assets.image`enemyUFO`, 0, 50)
    enemyUFO.x = randint(5, 155)
    enemyUFO.vy = randint(50, 100)
    enemyUFO.setKind(SpriteKind.Enemy)
})
