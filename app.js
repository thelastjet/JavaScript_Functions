console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    if (count < 0 || isNaN(count)) { //checking for a negative number or if parameter is not a number
        console.log("Parameter provided needs to be a positive number!");
    };
    for(let i = 0; i <= count; i++) {
        if (i % 2 == 1) {
            console.log(i);
        } else {
            continue;
        }// directions say to use an if/else statement, didn't actually need to put the else
         // statement as the loop would continue without the else statement!
    }
}

printOdds(8);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
    if (userName == undefined || age == undefined) {
        console.log("Please enter both a user name and your age!");
    }
    if (age < 16) {
        console.log(belowSixteen);
    } else if (age >= 16) {
        console.log(aboveSixteen);
    }
}

checkAge("Jay", 53);