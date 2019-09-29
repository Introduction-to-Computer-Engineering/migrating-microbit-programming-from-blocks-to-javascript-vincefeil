//creates variables and sets the sore to 5 for the begining ot the game
let Heart = 0
let winner = false
let lotery = 0
let score = 5
let goal = 0

//pressing button A picks a random number for Lotery variable then
//compares it to Heart. if they are equal it displays a check mark
//and adds one to the score. if not equal it displays an X and 
//deducts one from the score. the payer keeps going until the score is
//zero
input.onButtonPressed(Button.A, function () {
    lotery = Math.randomRange(0, 2)
    winner = led.point(0, 2)
    if (lotery && winner) {
        score += 1
        basic.showIcon(IconNames.Yes)
        basic.showNumber(score)
    } else {
        score += -1
        basic.showIcon(IconNames.No)
        basic.showNumber(score)
    }
    while (score == 0) {
        basic.showString("Over")
    }
})
//picks a random number between 0 and 2 for the Heart variable
basic.forever(function () {
    Heart = Math.randomRange(0, 2)
    if (Heart == 0) {
        basic.showIcon(IconNames.Diamond)
    } else if (Heart == 1) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
