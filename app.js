const prompt = require("prompt-sync")()

console.log("Welcome to the Computer Hardware Quiz")

const quest1 = prompt("What is the brain of the computer: ")
const correct1 = "CPU"

if (quest1 === correct1.toLocaleLowerCase()) {
    console.log("You got it correct!")
} else {
    console.log("Sorry. Wrong answer")
}