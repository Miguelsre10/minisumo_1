radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        Flag = 1
        EsquivaI()
        basic.pause(253)
        Flag = 0
    } else if (receivedNumber == 1) {
        Flag = 1
        EsquivarD()
        basic.pause(253)
        Flag = 0
    }
    if (receivedNumber == 3) {
        servos.P0.setAngle(0)
        basic.pause(2000)
        servos.P0.setAngle(126)
        basic.pause(100)
    }
})
function DetectaBorde () {
    if (Flag == 0) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 || maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
            LineaI = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
            LineaD = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
            Esquiva()
            Gira(randint(60, 506))
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        }
    }
}
function EsquivarD () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
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
function EsquivaI () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
}
function Esquiva () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
    basic.pause(400)
}
let Aux = 0
let LineaD = 0
let LineaI = 0
let Flag = 0
servos.P0.setAngle(126)
radio.setGroup(5)
let Radio = 0
basic.forever(function () {
    DetectaBorde()
})
