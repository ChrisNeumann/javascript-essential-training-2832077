/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Phone {
  constructor(
    // Defines parameters:
    name,
    type,
    touchscreen,
    cameraNum,
    posCams
  ) {
    // Define properties:
    this.name = name;
    this.type = type;
    this.touchscreen = touchscreen;
    this.cameraNum = cameraNum;
    this.cameraPositions = [];
    for (let i = 0; i < this.cameraNum; i++) {
      this.cameraPositions[i] = posCams[i];
    }
    this.batteryCharge = 0;
  }
  // Add methods like normal functions:
  chargePhone() {
    this.batteryCharge = 1;
  }
  currentCharge() {
    console.log(
      "The current battery charge of the phone is:",
      this.batteryCharge * 100,
      "%"
    );
  }
}

export default Phone;
