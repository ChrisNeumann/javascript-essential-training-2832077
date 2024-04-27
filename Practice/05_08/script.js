/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */
let backpackForms = document.querySelectorAll(".backpack__strap form");

backpackForms.forEach((elem) => {
  elem.classList.add("lengthEdit");
});
backpackForms.forEach((elem) => {
  elem.classList.add("backpack__starp__editForm");
});

backpackForms.forEach((elem) => {
  elem.classList.remove("backpack__starp__editForm");
});

backpackForms.forEach((elem) => {
  if (elem.parentElement.getAttribute("data-side") == "left") {
    elem.setAttribute("name", "leftStrap");
  } else {
    elem.setAttribute("name", "rightStrap");
  }
});

backpackForms.forEach((elem) => {
  console.log(
    "Name Attribute of " +
      elem.parentElement.getAttribute("Data-side") +
      " strap form element of the " +
      elem.parentElement.parentElement.parentElement.querySelector(
        ".backpack__name"
      ).innerHTML +
      " is " +
      elem.getAttribute("name")
  );
});

backpackForms.forEach((elem) => {
  switch (elem.getAttribute("name")) {
    case "leftStrap":
      elem.setAttribute("name", "leftStrapForm");
      break;
    case "rightStrap":
      elem.setAttribute("name", "rightStrapForm");
      break;
  }
});

document.querySelectorAll(".backpack__name").forEach((elem) => {
  elem.style.backgroundColor = "blue";
  elem.style.color = "white";
});
