const row= 10;
const column = 10;
const height = 500;
const width = 500;


let outerContainer = document.querySelector('.container');
outerContainer.style.width = `${width}px`;
outerContainer.style.height = `${height}px`;
console.log(height / row)
let square = document.querySelectorAll('.squareDiv');

for (let i = 1; i <= (row * column); i++) {
  let innerContainer = document.createElement('div');
  innerContainer.classList.add('squareDiv');
  innerContainer.style.height = `${height / row}px`;
  innerContainer.style.width = `${width / column}px`;
  innerContainer.style.flex = 'auto';
  innerContainer.classList.add("hover");
  outerContainer.appendChild(innerContainer);
    
    
  };



const hoverColor = document.querySelectorAll(".hover");
hoverColor.forEach((square) => {
  square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = 'black';
  });
// })  
  square.addEventListener("mouseleave", () => {
    square.style.backgroundColor = 'white';
  });
});








