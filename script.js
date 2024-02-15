function addRow() {
  
  let rowDiv = document.createElement("div");
  rowDiv.classList.add("row");
  addCell(rowDiv);
  document.querySelector('.container').appendChild(rowDiv);
  
}

function addCell(parent) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  let size = "100px";
  cell.style.width = size;
  cell.style.height = size;
  parent.appendChild(cell);
}


function addColumn() {
  let columnDiv = document.createElement("div");
  columnDiv.classList.add("column");
  addCell(columnDiv);
  document.querySelector('.container').appendChild(columnDiv);
}

let gridSize = 2;

function createGrid() {
  addRow();
  addColumn();
  // addColumn();
}
  

createGrid();

