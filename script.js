// function to generate random background of boxes
const boxes = document.getElementsByClassName('box');
const button = document.getElementsByClassName('btn');

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
