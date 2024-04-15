let ism = prompt(`write your name`)
let letter = prompt(`write your letter`)

let lowerism = ism.toLocaleLowerCase()
let lowerletter = letter.toLocaleLowerCase()


if (lowerletter.includes(lowerletter)) {
    alert(`${lowerism} ichida ${lowerletter} bor`)
} else {
    alert(`${lowerism} ichida ${lowerletter} yoq`)
}