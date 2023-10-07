input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.No)
    // Затримка для уникнення декількох обнулень після одного струсу
    basic.pause(1000)
    basic.clearScreen()
    ageMinutes = 0
    basic.showString("Age (minutes):")
    basic.showNumber(ageMinutes)
})
let ageMinutes = 0
// Рік народження
let birthYear = 2000
// Місяць народження
let birthMonth = 1
// День народження
let birthDay = 1
let birthTimestamp = (birthYear - 1970) * 31536000 + (birthMonth - 1) * 2592000 + (birthDay - 1) * 86400
let currentTimestamp = Math.idiv(input.runningTime(), 1000)
ageMinutes = Math.idiv(currentTimestamp - birthTimestamp, 60)
basic.showString("Age (minutes):")
basic.showNumber(ageMinutes)
