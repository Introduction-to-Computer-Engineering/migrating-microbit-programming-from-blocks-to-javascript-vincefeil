//create variables and set initial values
let binaryString = ""
let bit1bin = 0
let bit2bin = 0
let bit4bin = 0
let decimal = 0
let bit4add = 0
let bit2add = 0
let bit1add = 0
let bit4 = false
let bit1 = false
let bit2 = false

//reads pins 0 for input. if there it sets variable bit4 true
//checks bit4 if true set bit4bin to 1
//then checks bit2 and bit1 for the same and set bit2bin and bit1bin
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 50) {
        bit4 = true
    } else {
        bit4 = false
    }
    if (bit4) {
        bit4bin = 1
    } else {
        bit4bin = 0
    }
    if (pins.analogReadPin(AnalogPin.P1) > 50) {
        bit2 = true
    } else {
        bit2 = false
    }
    if (bit2) {
        bit2bin = 1
    } else {
        bit2bin = 0
    }
    if (pins.analogReadPin(AnalogPin.P2) > 50) {
        bit1 = true
    } else {
        bit1 = false
    }
    if (bit1) {
        bit1bin = 1
    } else {
        bit1bin = 0
    }
    //set a joined string to display bit4bin, bit2bin and bit1bin content
    binaryString = "" + bit4bin + bit2bin + bit1bin
    //displays binaryString content
    basic.showString(binaryString)
})
// when buttons A and B are pressed together checks bit1, bit2 and bit4
//if bit1 true sets bit1add to 1 if bit2 true sets bit2add to 2
//if bit4 true sets bit4add to 4
//adds values of bit1add, bit2add and bit4add and puts it in decimal
//displays decilam

input.onButtonPressed(Button.AB, function () {
    if (bit1) {
        bit1add = 1
    } else {
        bit1add = 0
    }
    if (bit2) {
        bit2add = 2
    } else {
        bit2add = 0
    }
    if (bit4) {
        bit4add = 4
    } else {
        bit4add = 0
    }
    decimal = bit4add + (bit2add + bit1add)
    basic.showNumber(decimal)
    basic.pause(2000)
})