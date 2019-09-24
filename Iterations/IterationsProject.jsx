let number = 0  //create veriable "number" and set to 0
let index = 0   //create veriable "index" and set to 0
// on shake gesture the program starts by setting variables to 0
// and displaying "Hellow"
// when "A" is pressed it flashes the heart 4 times
// then it counts from 1 to 5, clears the screen
// to restart shake the micro-bit
input.onGesture(Gesture.Shake, function () {
    number = 0
    index = 0
    while (!(input.buttonIsPressed(Button.A))) {
        basic.showString("Hello!")
    }
    for (let i = 0; i < 4; i++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
    for (let index = 0; index <= 4; index++) {
        number += 1
        basic.showNumber(number)
    }
    basic.clearScreen()
    
})
// intended to use the 3 loops covered in the iterations lesson
