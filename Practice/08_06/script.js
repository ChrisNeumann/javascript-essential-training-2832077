/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

function mainFunction() {
  const mainHTML = document.querySelector("main");
  const newArticle = document.createElement("article");
  newArticle.classList.add("newArticle");
  newArticle.innerHTML = `<h1> New Topic </h1>`;
  mainHTML.append(newArticle);
}

mainFunction();

const classFunction = function () {
  const greenPack = {
    name: "Frog Pack",
    color: "green",
    volume: 8,
    pocketNum: 3,
  };
  const greyPack = {
    name: "My Pack",
    color: "grey",
    volume: 5,
    pocketNum: 2,
  };
  return [greenPack, greyPack];
};

classFunction().forEach((backpack) => {
  const article = document.querySelector(".newArticle");
  const newList = document.createElement("ul");
  newList.innerHTML = `<li>Volume: ${backpack.volume}</li>
      <li>Color: ${backpack.color}</li>
      <li>Number of pockets: ${backpack.pocketNum}</li>
    `;
  article.append(newList);
});
