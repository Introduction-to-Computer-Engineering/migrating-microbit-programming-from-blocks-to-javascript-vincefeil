// Whan button A is presed display a Happy Face
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
// When Button B is pressed display a Sad Face
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . #
        . . # . .
        # . . # #
        . # . . .
        . . # . #
        `)
    basic.showLeds(`
        . # # . .
        . . . . .
        # . . # .
        . . # . .
        . # . . .
        `)
    basic.showLeds(`
        . . . # #
        # # . . .
        . . . # #
        . . . . .
        # # . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . # . . .
        # . . # .
        . . . . #
        `)
    basic.showLeds(`
        . # . # .
        . . . . .
        . . # # .
        # . . . .
        # . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    Number2 += 1
    basic.showNumber(Number2)
})
input.onGesture(Gesture.Shake, function () {
    Number2 = 0
    basic.clearScreen()
})
let Number2 = 0
basic.clearScreen()
Number2 = 0
let Number3 = 0
