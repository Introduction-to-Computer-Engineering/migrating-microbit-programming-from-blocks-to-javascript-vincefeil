//creat variables
let index = 0
let tone: number[] = []
tone = [131, 220, 349, 587]

//press button A and the Micro-Bit plays a series of tones in increasing
//frequency
//sets index to 0
//uses while loop to know when the last tone is, last tone is length of
//tone array -1
//plays the tone then adds 1 to the index to find the next tone
//in the array stops when the index and tone -1 numbers are the same
input.onButtonPressed(Button.A, function () {
    index = 0
    while (index < tone.length) {
        music.playTone(tone[index], music.beat(BeatFraction.Whole))
        index += 1
    }
})

//press button B and the Micro-Bit plays a series of tones in decreasing
//frequency
//sets index to value of the tone array -1
//uses while loop to know when the last tone is, last tone is when
//index = 0
//plays the tone then subtracts 1 from the index to find the next tone
//in the array stops when the index reached 0

input.onButtonPressed(Button.B, function () {
    index = tone.length - 1
    while (index >= 0) {
        music.playTone(tone[index], music.beat(BeatFraction.Whole))
        index += -1
    }
})
