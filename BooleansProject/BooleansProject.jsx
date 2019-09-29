//create variables and set initial values
let RdisplEql = false
let RdispPos = false
let RdispNeg = false
let Rcomp = 0
let Rdisp = 0
Rdisp = 0
Rcomp = 0
RdispNeg = false
RdispPos = false
RdisplEql = false
//display ready icon
basic.showIcon(IconNames.Happy)

//shake sets Rdisp and Rcomp to random numbers between 0 and 9
//program compares Rdisp and Rcomp and sets one of three variables true
//RdispNeg if Rdisp is less, RdispPos if greater and RdispEql if same
//then displays the Rdisp
input.onGesture(Gesture.Shake, function () {
    Rdisp = Math.randomRange(0, 9)
    Rcomp = Math.randomRange(0, 9)
    if (Rdisp < Rcomp) {
        RdisplEql = true
    }
    if (Rdisp > Rcomp) {
        RdispPos = true
    }
    if (Rdisp == Rcomp) {
        RdisplEql = true
    }
    basic.showNumber(Rdisp)
})
//on button A press program looks at RdispNeg if true display check
//if false display X
input.onButtonPressed(Button.A, function () {
    if (RdispNeg) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
//on button B press program looks at RdispPos if true display check
//if false display X
input.onButtonPressed(Button.B, function () {
    if (RdispPos) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
//on button A and B press program looks at RdisplEqu if true display check
//if false display X
input.onButtonPressed(Button.AB, function () {
    if (RdisplEql) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
