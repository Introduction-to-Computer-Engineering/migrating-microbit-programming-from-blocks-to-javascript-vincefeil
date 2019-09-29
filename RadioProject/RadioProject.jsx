//set variables
let armed = false
let intruder = false
//assign radio group
radio.setGroup(1)
//pressing button A sets armed to true and it starts monitoring
input.onButtonPressed(Button.A, function () {
    armed = true
})
//pressing button B sets armed and intruter to false, shuts off the alarm 
//it stops monitoring
input.onButtonPressed(Button.B, function () {
    armed = false
    intruder = false
})


//checks armed if false it does nothing
//if true it checks accelerometer if 0 it does nothing
//if accelerometer is greater than 500 it sets intruder to true
//if intruder is true the radio sends a string to the other Micro-Bit
//if false it does nothing

basic.forever(function () {
    if (armed) {
        if (input.acceleration(Dimension.X) > 500) {
            intruder = true
        } else {
            intruder = false
        }
        if (intruder) {
            radio.sendString("I")
        }
    } else {
        intruder = false
    }
})
//If the other Mico-Bit recieves the string it plays an alarm tone
//if no string is recieved it does nothing.
radio.onReceivedString(function (receivedString) {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
