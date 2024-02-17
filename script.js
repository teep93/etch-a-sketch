let gridContainer = document.querySelector(".container");
let totalNoSquares = 255;



function generateGrid() {
  for (let i = 1; i <= totalNoSquares; i++) {
    gridSquare = document.createElement("div");
    let squareStyle = document.querySelector("div");
    squareStyle.setAttribute('style', 'display: flex;', 'flex-wrap: wrap');
    gridContainer.appendChild(gridSquare);
  }
}  

generateGrid();