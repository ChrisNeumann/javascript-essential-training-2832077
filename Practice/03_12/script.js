/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Phone from "./phone.js";

const myPhone = new Phone("My phone", "iPhone8", true, 2, ["Rear", "Front"]);

const katPhone = new Phone("Kat's phone", "Samsung A21", true, 3, [
  "Rear",
  "Rear",
  "Front",
]);

const angiePhone = new Phone("Angies's phone", "Nokia", false, 0, []);

console.log("My phone:", myPhone);
console.log("Kat's phone:", katPhone);
console.log("Angie's phone:", angiePhone);

myPhone.currentCharge();
myPhone.chargePhone();
myPhone.currentCharge();
