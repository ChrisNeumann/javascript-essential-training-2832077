/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const telephone = {
  name: "My Telephone",
  type: "iPhone",
  touchscreen: true,
  batteryCharge: 0.8,
  numCameras: 2,
  posCameras: {
    cam1: "rear",
    cam2: "front",
  },
};

console.log("Telephone object is:", telephone);
console.log(
  "The battery charge of the telephone is:",
  telephone.batteryCharge * 100,
  "%"
);
