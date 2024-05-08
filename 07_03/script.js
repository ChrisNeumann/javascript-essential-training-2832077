/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];

console.log(backpackContents);

backpackContents.shift(); // removes the 1st element of the array
console.log(backpackContents);

backpackContents.pop(); // removes the last item of the array
console.log(backpackContents);

backpackContents.push("pencil", 5); // altrnative to simple assigment at the end to ad element(s)- method push
backpackContents.unshift("pencil", 5); // method unshift inserts comma seperated list of items to the beginning of the array

console.log(backpackContents);
console.log(backpackContents.join()); // writes the contents of the array as a comma seperated string
console.log(backpackContents.join(", ")); // any parameter (string) gives the format of the sperator between items
console.log(backpackContents.join(" | "));

backpackContents = ["piggy", "headlamp", "pen"];

backpackContents.forEach(function (item) {
  item = `<li>${item}</li>`;
  console.log(item);
});

console.log(backpackContents);

let longItems = backpackContents.find(function (item) {
  if (item.length >= 5) {
    return item;
  }
});
console.log("longItems:", longItems);
