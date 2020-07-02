var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");
var resetButton = document.querySelector("#reset");

init();
function init(){
    setupEventButtons();
    setupEventSquares(); 
    reset()
}

//adding event lisnters for buttons
function setupEventButtons(){
    for (let w = 0; w < modeButtons.length; w++) {
        modeButtons[w].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected");
            if (modeButtons[w].textContent === "Easy"){
                numSquares = 3;
            }else if(modeButtons[w].textContent ==="Medium"){
                numSquares = 6;
            }else{
                numSquares = 9;
            }
            reset();
        })
    }
}

//adding event listenrs for squares
function setupEventSquares(){
    for (let index = 0; index < squares.length; index++) {
        //add click listners to squares
        squares[index].addEventListener("click", function(){
            //grap color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if (clickedColor === pickedColor) {
                //change colors of all squares
                changeColors(clickedColor);
                //pop up message if correct
                messageDisplay.textContent = "Correct";
                //display reset button
                resetButton.textContent = "play again?";
                //change background color of h1
                h1.style.backgroundColor = pickedColor;
            }
            else{
                this.style.backgroundColor= "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset() {
//generate all new colors
colors = generateRandomColors(numSquares);
//pick a new random color from array
pickedColor = pickColor();
//change colorDisplay to match picked Color
colorDisplay.textContent = pickedColor;
//change colors of squares
for (let k = 0; k < squares.length; k++) {
    if(colors[k]){
                squares[k].style.display ="block";
                squares[k].style.backgroundColor = colors[k];
            }
            else{
                squares[k].style.display ="none";        
            }
}
h1.style.backgroundColor = "steelblue";
resetButton.textContent = "New Colors";
messageDisplay.textContent = "";
}

resetButton.addEventListener("click", reset)




function changeColors(color){
    squares.forEach(element => {
        element.style.backgroundColor = color;
    });
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = []

    //repeat num times
    for (let j = 0; j < num; j++) {
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return arr
    return arr;
}

function randomColor(){
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}