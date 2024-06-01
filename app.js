const prompt = require("prompt-sync")()
let score = 0;

console.log("Welcome to the Computer Hardware Quiz")

const quest1 = prompt("Brain of the computer: ")
const correct1 = "CPU"

if (quest1.toUpperCase() === correct1) {
    score++
}

const quest2 = prompt("Would you rather 3090ti or 4060? ")
const correct2 = "3090ti"

if (quest2.toLowerCase() === correct2) {
    score++
}

const quest3 = prompt("What is reccomended RAM in 2024? ")
const correct3 = "16gb"
const correct3rd = "16"

if (quest3.toLowerCase() === correct3 || correct3rd) {
    score++
}

console.log("You got", score, "score! ")