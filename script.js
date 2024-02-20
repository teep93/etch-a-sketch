const row= 60;
const column = 60;
const height = 500;
const width = 500;

let outerContainer = document.querySelector('.container');
outerContainer.style.width = `${width}px`;
outerContainer.style.height = `${height}px`;
console.log(height / row)

function createGrid() {
  for (let i = 1; i <= (row * column); i++) {
    let innerContainer = document.createElement('div');
    innerContainer.style.height = `${height / row}px`;
    innerContainer.style.width = `${width / column}px`;
    innerContainer.style.flex = 'auto';
    outerContainer.appendChild(innerContainer);
  };
}