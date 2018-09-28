/*const userName = prompt('Enter your name');
const greetings = 'Hello ' + userName;
alert(greetings);

const userAge = parseInt(prompt('Enter your age'))
const nextAge = userAge + 1;
alert('Next year you will be ' + nextAge);

const userMonth = parseInt(prompt('Enter month number'));
// Divide it by 2 - /, -, *, % 
const monthNumDivided = userMonth / 2;
// Print to user
alert(monthNumDivided);

const userAge = parseInt(prompt('Enter your age'));
if (userAge >= 18) { //=== !===
    // If true
    alert('You are adult');
} else {
    // If false
    alert('You are child');
}*/

function addOne(num) {
    const newNum = num + 1;
    return newNum;
}

let result = addOne(10);
alert(result);
result = addOne(result);
alert(result);

