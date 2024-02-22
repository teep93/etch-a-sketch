let row = 4;
let column = 4;
const height = 500;
const width = 500;
let inputRow = '';
let inputColumn = ''



let outerContainer = document.querySelector(".container");
outerContainer.style.width = `${width}px`;
outerContainer.style.height = `${height}px`;
console.log(height / row);
let squares = document.querySelectorAll(".squareDiv");
let square = document.querySelector(".squareDiv")

function createNewGrid(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  templateGrid();
}  
  



function templateGrid() {
  for (let i = 1; i <= row * column; i++) {
    let innerContainer = document.createElement("div");
    innerContainer.classList.add("squareDiv");
    innerContainer.style.height = `${height / row}px`;
    innerContainer.style.width = `${width / column}px`;
    innerContainer.style.flex = "auto";
    innerContainer.classList.add("hover");
    outerContainer.appendChild(innerContainer);
  }
  addHover();
}

templateGrid();

function addHover() {
  const hoverColor = document.querySelectorAll(".hover");
  hoverColor.forEach((square) => {
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "black";
    });
  });
}
  
const newGrid = document.querySelector("#newGrid");
newGrid.addEventListener("click", () => {
  createNewGrid(outerContainer);

});

