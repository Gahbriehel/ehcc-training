
/*
1. Variables and Basic Operations  
Challenge: Create a program that:  
- Asks the user for their name and age.  
- Calculates the year they were born.  
- Outputs a message like: "Hello [Name], you were born in [Year]."

Hint: Use prompt() for input and console.log() for output.

*/

const name = prompt("Enter your name:");
const age = prompt("Enter your age:");
const birthYear = 2025 - age;

alert(`Hello ${name}, you were born in ${birthYear}`)

/*
2. If-Else Statements  
Challenge: Write a program that:  
- Takes a number as input.  
- Checks if the number is positive, negative, or zero.  
- Outputs the result.

Example Output:  
- Input: 5 → Output: "The number is positive."  
- Input: -3 → Output: "The number is negative."  

---
*/

const numberToCheck = prompt("Enter number");
if (numberToCheck >= 1 ) {
    alert(`${numberToCheck} is positive`)
} else if (numberToCheck < 0 ) {
    alert(`${numberToCheck} is negative`)
} else {
    alert(`${numberToCheck} is zero`)
}

/*
3. Loops (For and While)  
Challenge: Create a program that:  
- Prints the multiplication table for a given number up to 12.  
- Example: If the input is 5, it should print:  
  5 x 1 = 5  
  5 x 2 = 10  
  ...  
  5 x 12 = 60  

---
*/

const number = prompt("Enter a number to multiply");
for (let i = 1; i < 13; i++) {
    alert(`${number} x ${i} = ${number * i}`)
}


/*
4. Arrays  
Challenge:  
- Create an array with at least 5 numbers.  
- Write a program that calculates and prints the sum of all the numbers in the array.

Hint: Use a for loop to iterate over the array.

---
*/

const numberArray = [2, 5, 7, 45, 6, 4, 9, 1, 0, 1]
let iterator = 0
for (let i = 0; i < numberArray.length; i++) {
    iterator += numberArray[i]
}
console.log(iterator)

/*
5. Objects  
Challenge:  
- Create an object to store a student's information: name, age, and scores in three subjects.  
- Calculate the average score and determine if the student passed. (Passing mark is 50).  
- Output the student's name, average score, and pass/fail status.  
---
*/

const student = {
    name: "John Doe",
    age: 16,
    scores: {
      math: 40,
      english: 35,
      science: 10
    }
  };

  let averageScore = (student.scores.math + student.scores.english + student.scores.science) / 3;
  const passStatus = averageScore >= 50 ? 'Passed' : 'Failed'

  function displayResult(obj) {
    console.log(`Student name: ${obj.name}\n Average score: ${averageScore.toFixed(1)} \n ${passStatus}`)
  }

  displayResult(student)


/*
6. Combine Everything (Mini Project)  
Challenge: Build a simple to-do list application that:  
- Allows users to add tasks.  
- Displays all tasks.  
- Allows users to remove tasks by index.  

Example Output:  
    1. Buy groceries  
    2. Study JavaScript  
    3. Go for a walk  
    Enter the number of the task you want to remove: 2  
    Updated List:  
    1. Buy groceries  
    2. Go for a walk  
*/