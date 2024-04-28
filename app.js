// //NOTE

// /*
// readline is a JS object (rl)
// */

// //Step 1: include the readline module
// const readline = require('readline')

// //Step 2: Create an instance of readline.Interface
// const r1 = readline.Interface({
//     input: process.stdin,
//     output: process.stdout
// })

// //Step 3: prompt the user for their name
// rl.question('What is your name?', (name) => {
//     //Step 4: Display a greeting
//     console.log(`Hello, ${name}!`)

//     //Step 5: Close the readline interface.
//     r1.close()
// })



//Include the realline module for.
const readline = require('readline')

//Create and interface for the input and output.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

//Function to generate a random number between min and max (inclusive).
function getRandomInt(min, max) {
    min = Math.ceil(min),
        max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

//The secret number to guewidss between 1 and 100.
const secretNumber = getRandomInt(1, 100)

//Counter for number of attempts.
let attempts = 0

console.log('Guess the number! It\'s between 1 and 100. You have unlimited attempts.')

//Create a function to start the game.
function guessNumber() {
    rl.question('Enter your guess: ', (answer) => {
        attempts += 1 // Increment the number of attempts.
        const guess = parseInt(answer, 10) //Converting the input string to a number.

        //Check if the guess is correct.
        if (guess === secretNumber) {
            console.log(`Correct! the number was ${secretNumber}`)
            rl.close()
        } else if (guess < secretNumber) {
            console.log('Too low!')
            guessNumber()
        } else if (guess > secretNumber) {
            console.log('Too high!')
            guessNumber()
        } else {
            console.log('Please enter a valid number')
            guessNumber()
        }
    })
}

guessNumber()