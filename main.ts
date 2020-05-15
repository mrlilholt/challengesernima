let degrees = 0
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees < 45 || degrees > 315) {
        basic.showString("NORTH")
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(5000)
    } else if (degrees < 135) {
        basic.showString("EAST")
        basic.showLeds(`
            . . . . .
            . . . # .
            # # # # #
            . . . # .
            . . . . .
            `)
        basic.pause(5000)
    } else if (degrees < 225) {
        basic.showString("SOUTH")
        basic.showIcon(IconNames.Sword)
        basic.pause(5000)
    } else {
        basic.showString("WEST")
        basic.showLeds(`
            . . . . .
            . # . . .
            # # # # #
            . # . . .
            . . . . .
            `)
        basic.pause(5000)
    }
})
