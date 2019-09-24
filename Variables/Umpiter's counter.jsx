basic.clearScreen()
let balls = 0
let strikes = 0

input.onButtonPressed(Button.A, function(){
    balls += 1
    basic.showNumber(balls)
})

input.onButtonPressed(Button.B, function(){
    strikes += 1
    basic.showNumber(strikes)
})

input.onButtonPressed(Button.AB, function(){
    basic.clearScreen()
    balls = 0
    strikes = 0
})

input.onGesture(Gesture.Shake, function(){
    basic.showString("Balls")
    basic.showNumber(balls)
    basic.showString("Strikes")
    basic.showNumber(strikes)

})