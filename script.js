// Targeting boxes using DOM
const boxes = document.getElementsByClassName('box');

// function to generate random background of boxes
function randomColor() {
    let num1 = Math.floor(Math.random() * 256);
    let num2 = Math.floor(Math.random() * 256);
    let num3 = Math.floor(Math.random() * 256);
    return `rgb(${num1}, ${num2}, ${num3})`;
}
// loop for iteration

for(let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = randomColor();
}
