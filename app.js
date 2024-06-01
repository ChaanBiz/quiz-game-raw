const prompt = require("prompt-sync")()
const quest1 = prompt("What is the brain of the computer: ")
const correct1 = "CPU"

let score = 0;

console.log("Welcome to the Computer Hardware Quiz")

if (quest1.toUpperCase() === correct1) {
    console.log("You got it correct!")
} else {
    console.log("Sorry. Wrong answer")
}

