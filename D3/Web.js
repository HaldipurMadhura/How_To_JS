/*--------------Assignment 2-----------------
const names = [ "Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya" ];

You have been provided with an array of 10 Indian names. 
Your task is to create a simple web page featuring two buttons: "Next" and "Previous". 
Using these buttons, display the names sequentially, one at a time.*/

const names = [ "Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya" ];
let n = names.length;
let index = 0;
let dName = document.getElementById('myName');

function updatedisplay() {
    dName.textContent = names[index];
}

function previous() {
    index = (index - 1 + n) % n;
    updatedisplay();
}

function next() {
    index = (index + 1) % n;
    updatedisplay();
}

updatedisplay();
