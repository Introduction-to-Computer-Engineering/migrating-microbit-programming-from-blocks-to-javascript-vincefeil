//set all scores to 0
let p1 = 0
let p2 = 0
let p3 = 0
let p4 = 0
let p5 = 0
let player = 0

input.onGesture(Gesture.Shake, function () {
basic.clearScreen()   
    //display player 1 score
if (p1 == 1) {
    led.plot(0, 4)
}
if (p1 == 2) {
    led.plot(0, 4)
    led.plot(0, 3)
}
if (p1 == 3) {
    led.plot(0, 4)
    led.plot(0, 3)
    led.plot(0, 2)
}
if (p1 == 4) {
    led.plot(0, 4)
    led.plot(0, 3)
    led.plot(0, 2)
    led.plot(0, 1)
}
if (p1 == 5) {
    led.plot(0, 4)
    led.plot(0, 3)
    led.plot(0, 2)
    led.plot(0, 1)
    led.plot(0, 0)
}
//display player 2 score
if (p2 == 1) {
    led.plot(1, 4)
}
if (p2 == 2) {
    led.plot(1, 4)
    led.plot(1, 3)
}
if (p2 == 3) {
    led.plot(1, 4)
    led.plot(1, 3)
    led.plot(1, 2)
}
if (p2 == 4) {
    led.plot(1, 4)
    led.plot(1, 3)
    led.plot(1, 2)
    led.plot(1, 1)
}
if (p2 == 5) {
    led.plot(1, 4)
    led.plot(1, 3)
    led.plot(1, 2)
    led.plot(1, 1)
    led.plot(1, 0)
}
//display player 3 score
if (p3 == 1) {
    led.plot(2, 4)
}
if (p3 == 2) {
    led.plot(2, 4)
    led.plot(2, 3)
}
if (p3 == 3) {
    led.plot(2, 4)
    led.plot(2, 3)
    led.plot(2, 2)
}
if (p3 == 4) {
    led.plot(2, 4)
    led.plot(2, 3)
    led.plot(2, 2)
    led.plot(2, 1)
}
if (p3 == 5) {
    led.plot(2, 4)
    led.plot(2, 3)
    led.plot(2, 2)
    led.plot(2, 1)
    led.plot(2, 0)
}
//display player 4 score
if (p4 == 1) {
    led.plot(3, 4)
}
if (p4 == 2) {
    led.plot(3, 4)
    led.plot(3, 3)
}
if (p4 == 3) {
    led.plot(3, 4)
    led.plot(3, 3)
    led.plot(3, 2)
}
if (p4 == 4) {
    led.plot(3, 4)
    led.plot(3, 3)
    led.plot(3, 2)
    led.plot(3, 1)
}
if (p4 == 5) {
    led.plot(3, 4)
    led.plot(3, 3)
    led.plot(3, 2)
    led.plot(3, 1)
    led.plot(3, 0)
}
//display player 5 score
if (p5 == 1) {
    led.plot(4, 4)
}
if (p5 == 2) {
    led.plot(4, 4)
    led.plot(4, 3)
}
if (p5 == 3) {
    led.plot(4, 4)
    led.plot(4, 3)
    led.plot(4, 2)
}
if (p5 == 4) {
    led.plot(4, 4)
    led.plot(4, 3)
    led.plot(4, 2)
    led.plot(4, 1)
}
if (p5 == 5) {
    led.plot(4, 4)
    led.plot(4, 3)
    led.plot(4, 2)
    led.plot(4, 1)
    led.plot(4, 0)
}
}) 
input.onButtonPressed(Button.A, function () {
    player += 1
    if (player > 5) {
        player = 1
    }
    basic.showString("PLR")
    basic.showNumber(player)
})
input.onButtonPressed(Button.B, function () {
    if (player == 1) {
        p1 += 1
        basic.showString("PLR 1 +1")
        basic.showNumber(p1)
    }
    if (player == 2) {
        p2 += 1
        basic.showString("PLR 2 +1")
        basic.showNumber(p2)
    }
    if (player == 3) {
        p3 += 1
        basic.showString("PLR 3 +1")
        basic.showNumber(p3)
    }
    if (player == 4) {
        p4 += 1
        basic.showString("PLR 4 +1")
        basic.showNumber(p4)
    }
    if (player == 5) {
        p5 += 1
        basic.showString("PLR 5 +1")
        basic.showNumber(p5)
    }

if (p1 == 5) {
    basic.showString("PLR 1 is the winner")
}
if (p2 == 5) {
    basic.showString("PLR 2 is the winner")
}
if (p3 == 5) {
    basic.showString("PLR 3 is the winner")
}
if (p4 == 5) {
    basic.showString("PLR 4 is the winner")
}
if (p5 == 5) {
    basic.showString("PLR 5 is the winner")
}
})
input.onButtonPressed(Button.AB, function(){
    basic.clearScreen()
    p1 = 0
    p2 = 0
    p3 = 0
    p4 = 0
    p5 = 0
    player = 0
})


