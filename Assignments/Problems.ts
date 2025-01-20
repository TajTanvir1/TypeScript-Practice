// -------------------------------------------
//===================== Problem 1:
// -------------------------------------------

// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

// Sample Input:
// sumArray([1, 2, 3, 4, 5]);

// Sample Output:
// 15;

// -------------------------------------------
// ======================Problem 2:
// -------------------------------------------

// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

// // Sample Input:
// removeDuplicates([1, 2, 2, 3, 4, 4, 5])

// // Sample Output:
// [1, 2, 3, 4, 5]


// -------------------------------------------
// ================== Problem 3:
// -------------------------------------------

// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

// Example:

// Input: "I love typescript", "typescript"
// Output: 1
// // Sample Input:
// countWordOccurrences("I love typescript", "typescript");

// // Sample Output:
// 1;



// -------------------------------------------
// ======================== Problem 4:
// -------------------------------------------

// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

// // Sample Input 1:
// const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// // Sample Output 1:
// 78.54;

// // Sample Input 2:
// const rectangleArea = calculateShapeArea({
//   shape: "rectangle",
//   width: 4,
//   height: 6,
// });

// // Sample Output 2:
// 24;



// -------------------------------------------
// =========================== Problem 5:
// -------------------------------------------

// Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

// Hints: Use keyof

// // Sample Input:
// const person = { name: "Alice", age: 30 };
// console.log(getProperty(person, "name"));

// // Sample Output:
// Alice;



// -------------------------------------------
// ====================== Problem 6:
// -------------------------------------------

// Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

// // Sample Input :
// const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, { age: 26 }));

// // Sample Output:
// {
//   name: "Alice",
//   age: 26,
//   email: "alice@example.com"
// }


// -------------------------------------------
// ====================== Problem 7:
// -------------------------------------------

// Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

// // Sample Input 1:
// const car = new Car("Honda", "Civic", 2018);
// car.getCarAge();

// // Sample Output 1:
// 6 (assuming current year is 2024)



// -------------------------------------------
// ================== Problem 8:
// -------------------------------------------

// Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

// // Sample Input:
// const person = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(validateKeys(person, ["name", "age"]));

// // Sample Output:
// true;

// -------------------------------------------
// -------------------------------------------
// Note: Please make sure to use the exact function/property name provided in the assignment.This will help us evaluate your solution smoothly.

// -------------------------------------------
// ==============Blog Writing (any one):
// -------------------------------------------

// Write an impactful blog posts covering the following topics:

// The significance of union and intersection types in Typescript.
// How to handle asynchronous operations using async/await over callback/promise TypeScript.
// Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.
// Note:You will have to choose any one blog topic
