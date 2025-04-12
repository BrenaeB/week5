//Pt 1.Understanding basics of arrays
let fruits = ["apple", "banana", "cherry"];
let i = fruits[1];


console.log(i);
console.log(fruits.length);

//Pt 2. Adding and removing elements
 fruits.push("orange");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.push("mango","pineapple");
fruits.pop()
console.log(fruits.length);

let appleCount = 0;

//Pt 3. Looping through arrays
for (let fl = 0; fl < fruits.length; fl++){
    console.log(fruits[fl]);
    console.log(fruits[fl].toUpperCase());  


    if (fruits[fl] === "apple") {   
        appleCount++;  
    }  
}  
 

console.log(`The fruit "apple" appears ${appleCount} times.`);  


//Pt 4. Hands on practice
let cart = [];

cart.push("broccolli","carrots","potatos");
console.log(cart);

cart.pop();
console.log(cart);

//reversing the order
let numbers = ["1","2","3","4","5"];

let reversedNumbers = [];

for (let i = numbers.length -1; i >= 0; i--) {
    reversedNumbers.push(numbers[i]);
}

console.log(reversedNumbers);

//Pt 5. Conditional statements with arrays
let array1 = ["a", "b", "c", "d"];
let array2 = ["red", "blue", "green"];

if (array1.length > array2.length) {
    console.log("array1 is greater in length");
} else if (array1.length < array2.length) {
    console.log("array2 is greater in length");
} else {
    console.log("both arrays have the same length");
}

//Pt 6. Print even indexed elements

const array = [10, 20, 30, 40, 50, 60];

for (let i = 0; i < array.length; i++) {  
    if (i % 2 === 0) {  
        console.log(array[i]);  
    }  
}  

//Pt 7. Push challenege nested loops
/*   
   Nested loops are loops inside of a loop that allow us to iterate through multi-dimentional arrays/ 2D arrays
   ie:[[1,2][3,4][5,6]]   
*/  

const students = ["Alice", "Bob", "Charlie"];
const subjects =  ["Math", "Science"];

for (let i = 0; i < students.length; i++) {  
    for (let j = 0; j < subjects.length; j++) {  
        // Print the student and their corresponding subject  
        console.log(`${students[i]} - ${subjects[j]}`);  
    }  
}  