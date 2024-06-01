const prompt = require("prompt-sync")()
let score = 0;

console.log("Welcome to the Computer Hardware Quiz")

const quest1 = prompt("What is the brain of the computer: ")
const correct1 = "CPU"

if (quest1.toUpperCase() === correct1) {
    console.log("You got it correct!")
} else {
    console.log("Sorry. Wrong answer")
}

const quest2 = prompt("Would you rather 3090ti or 4060? ")
const correct2 = "3090ti"

if (quest2.toUpperCase() === correct2) {
    console.log("You got it correct!")
} else {
    console.log("Sorry. Wrong answer")
}

const quest3 = prompt("What is the brain of the computer: ")
const correct3 = "CPU"

if (quest1.toUpperCase() === correct1) {
    console.log("You got it correct!")
} else {
    console.log("Sorry. Wrong answer")
}

