//create variables
let component2 = 0
let component1 = 0
let desiredTemp = 0
desiredTemp = 22

//pressing button A adds 1 to the desiredTemp and displays the 
//desiredTemp
input.onButtonPressed(Button.A, function () {
    desiredTemp += 1
    basic.showString("" + desiredTemp)
})
//pressing button B subtracts 1 from the desiredTemp and displays the 
//desiredTemp
input.onButtonPressed(Button.B, function () {
    desiredTemp += -1
    basic.showString("" + desiredTemp)
})

//preseeing A and B sets the values of component1 and component2 to
//the values of analog pin0 and analog pin1 then displays those values
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    component1 = pins.analogReadPin(AnalogPin.P0)
    basic.showString("Comp1 =" + component1)
    basic.clearScreen()
    component2 = pins.analogReadPin(AnalogPin.P1)
    basic.showString("Comp2 =" + component2)
})

//continuously moniters the on board temp sensor and the desiredTemp
//if on board is lower then desired it sends a high to pin2 to turn on
//heat and displays an H on the LEDs
//if on board is higher then desired it sends a low to pin2 to turn off
// the heat
basic.forever(function () {
    if (input.temperature() < desiredTemp) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.showString("H")
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})