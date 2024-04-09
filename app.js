//NOTE

/*
readline is a JS object (rl)
*/

//Step 1: include the readline module
const readline = require('readline')

//Step 2: Create an instance of readline.Interface
const r1 = readline.Interface({
    input: process.stdin,
    output: process.stdout
})

//Step 3: prompt the user for their name
rl.question('What is your name?', (name) => {
    //Step 4: Display a greeting
    console.log(`Hello, ${name}!`)
})
//Step 5: Close the readline interface.
r1.close()