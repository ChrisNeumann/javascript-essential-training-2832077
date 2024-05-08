/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true];

console.log(collection);

collection[2] = "camera"; // change contens at any position
collection[collection.length] = "new item"; // add a new item at the end
collection[9] = "at the end"; // add a nw item at any position , regardless of actual length - unused positions stay undefined
console.log(collection[8]); // demonstrates the undefined content of a slot not assigned a value
console.log(collection);
