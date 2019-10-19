var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var  message = document.querySelector("#message");
var h1tag = document.querySelector("#h1tag");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpSquares(){
	for(var i = 0; i< squares.length; i++){
	//add click listeners to squares.
	squares[i].addEventListener("click",function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;

		//compare color to pickedcolor
		if(clickedColor===pickedColor){
			message.textContent= "Correct";
			resetButton.textContent = "Play Again?";
			changeColors(pickedColor);
			h1tag.style.backgroundColor = clickedColor;
		}else{
			this.style.backgroundColor = "#232323";
			message.textContent= "Try Again";
		}
	});
	}
}

function setUpModeButtons(){
		for (var i=0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ?	numberOfSquares = 3 : numberOfSquares = 6;
			console.log (numberOfSquares);
			reset();
		});
	}
}

function reset(){
	colors = generateRandomColors(numberOfSquares);
	//pick new random colors
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	message.textContent = "";
	//change colors of squares
	for(var i = 0; i< squares.length; i++){
	//add initial colors to squares
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	h1tag.style.backgroundColor = "steelblue";
}	

}


resetButton.addEventListener("click", function(){
	reset();
});

function changeColors(color){
	//loop through all squares
	for(var i=0;i<squares.length;i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random =Math.floor(Math.random() *colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr =[]
	//add num random colors to an array
	for(var i=0; i<num; i++){
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a red from 0-255
	var r =Math.floor(Math.random() * 256);
	//pick a blue from 0-255
	var g =Math.floor(Math.random() * 256);
	//pick a green from 0-255
	var b =Math.floor(Math.random() * 256);

	//"rgb(r, g, b)"
	return "rgb(" + r + ", " + g +", " + b + ")";
}