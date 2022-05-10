let LineaI = 0
let LineaD = 0
let Aux = 0
function DetectaBorde () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 || maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        LineaI = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
        LineaD = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
        Esquiva()
        Gira(randint(60, 506))
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 175)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
}
function Gira (TiempoGiro: number) {
    if (LineaI == 1 && LineaD == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        basic.pause(TiempoGiro)
    } else if (LineaI == 0 && LineaD == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        basic.pause(TiempoGiro)
    } else if (LineaD == 1 && LineaI == 1) {
        Aux = randint(0, 1)
        if (Aux == 0) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            basic.pause(TiempoGiro)
        } else {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            basic.pause(TiempoGiro)
        }
    }
}
function Esquiva () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
    basic.pause(400)
}
basic.forever(function () {
    DetectaBorde()
})
