function addSquareDiv() {
    const squareDiv = document.createElement("div")
    squareDiv.classList.add("square");
    let size = "100px";
    squareDiv.style.width = size;
    squareDiv.style.height = size;
    document.body.appendChild(squareDiv)
    
}

for (let i = 0; i <= 16; i++) {
    addSquareDiv();
}







