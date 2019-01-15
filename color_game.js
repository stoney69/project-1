var numSquares = 6;
var colors = clickedColorChange(numSquares)

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor()
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1");
var buttonDisplay = document.querySelector("#button");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");

easyButton.addEventListener("click", function()
{
	easyButton.classList.add("selected")
	hardButton.classList.remove("selected")
	numSquares = 3
	colors = clickedColorChange(numSquares)
	pickedColor = pickColor()
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++)
	if(colors[i])
	{
		squares[i].style.background = colors[i]
	}
	else
	{
		squares[i].style.display = "none";
	}
});

hardButton.addEventListener("click", function(){

	easyButton.classList.remove("selected")
	hardButton.classList.add("selected")
	numSquares = 6
		colors = clickedColorChange(numSquares)
	pickedColor = pickColor()
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});

buttonDisplay.addEventListener("click", function(){
	colors = clickedColorChange(numSquares)

	pickedColor = pickColor()
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	this.textContent = "New Colors"
		for( var i = 0;i < squares.length; i++){
			squares[i].style.background = colors[i];
		}
		h1.style.background = "steelblue";
})


for(var i = 0; i < squares.length; i++){
	
	squares[i].style.background = colors[i];

	
	squares[i].addEventListener("click", function() {
		
		var clickedColor = this.style.background;
		
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			buttonDisplay.textContent = "Play Again?"
			changeColor(clickedColor);
			h1.style.background = clickedColor

		} else {
			
			this.style.background = "#232323";
			messageDisplay.textContent = "Try again";
		}
	});
}

function changeColor(colors)
	{
		for (var i = 0; i < squares.length; i++){
			squares[i].style.background = colors
		}
	}

	function pickColor()
	{
		var random = Math.floor(Math.random() * colors.length);
		return colors[random];
	}

	function clickedColorChange(num)
	{
		var arr = [];

		for (i = 0; i < num ; i++)
		{
			arr.push(pickedchangecolor())
		}
		return arr;

	}

	function pickedchangecolor(){
		 var r = Math.floor(Math.random() * 256);
		 var g = Math.floor(Math.random() * 256);
		 var b = Math.floor(Math.random() * 256);

		 return "rgb(" + r +", " + g + ", " + b +")";

}
