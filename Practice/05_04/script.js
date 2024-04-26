/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */
let backpack = document.querySelectorAll(".backpack");
backpack.forEach((elem) =>
  elem.querySelector(".lid-toggle").addEventListener("click", () => {
    let lid = elem.querySelector(".backpack__lid span");
    if (lid.innerHTML == "closed") {
      lid.innerHTML = "open";
    } else {
      lid.innerHTML = "closed";
    }
  })
);
