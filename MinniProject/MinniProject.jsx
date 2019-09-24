input.onButtonPressed(Button.A, function () {
    buttona = 1
})
input.onButtonPressed(Button.B, function () {
    buttona = 2
})
let buttona = 0
let xindex0 = 0
let xindex1 = 1
let xindex2 = 2
let xindex3 = 1
let xindex4 = 0
while (buttona < 1) {
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # . #
        . . . . .
        . . . . .
        `)
    while (buttona == 1) {
        for (let xindex0 = 0; xindex0 <= 4; xindex0++) {
            led.plot(xindex0, 0)
            led.plot(xindex1, 1)
            led.plot(xindex2, 2)
            led.plot(xindex3, 3)
            led.plot(xindex4, 4)
            xindex1 += 1
            xindex2 += 1
            xindex3 += 1
            xindex4 += 1
            basic.pause(200)
            basic.clearScreen()
            if (xindex1 > 4) {
                xindex1 = 0
            }
            if (xindex2 > 4) {
                xindex2 = 0
            }
            if (xindex3 > 4) {
                xindex3 = 0
            }
            if (xindex4 > 4) {
                xindex4 = 0
            }
            while (buttona > 1) {
                for (let i = 0; i < 4; i++) {
                    basic.showLeds(`
                        . . # . .
                        . # . # .
                        # . . . #
                        . # . # .
                        . . # . .
                        `)
                    basic.pause(2000)
                    basic.clearScreen()
                    basic.pause(2000)
                    buttona = 0
                }
            }
        }
    }
}
