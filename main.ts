basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (sensors.ping(DigitalPin.P5, DigitalPin.P6, PingUnit.Centimeters) <= 15) {
        sensors.actuator_servo(AnalogPin.P4, 61)
        basic.pause(5000)
    } else {
        sensors.actuator_servo(AnalogPin.P4, 0)
    }
})
