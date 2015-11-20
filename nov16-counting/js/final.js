/* js goes here */

var htmlObj = document.querySelector('html');
var submitBtn = document.querySelector('input[type="submit"]');
var guessBox = document.querySelector('input[type="text"]');
var catDisp = document.getElementById('catDisp');
var catCode = '<img src="img/kitten.png" height="925" width="800" alt="">';
var randNum = 1;

submitBtn.addEventListener('click', submitGuess);

function randomNum(max){
	return Math.floor(Math.random() * (max - 1 + 1)) + 1;
}

function preventBtnDefaults(x){
	x.preventDefault();
}

function submitGuess(evt){
	preventBtnDefaults(evt);
	guessBox.disabled = true;
	var guess = guessBox.value;
	checkGame(guess);
}

function clearGame(){
	catDisp.innerHTML = '';
	guessBox.disabled = false;
	guessBox.value = '';
	htmlObj.style.backgroundColor = 'hsla(0, 0%, 100%, 1)';
	startGame();
}

function startGame(){
	randNum = randomNum(50);

	for(var i = 0; i < randNum; i++){
		catDisp.innerHTML += catCode;
	}
}
startGame();

function checkGame(num){
	console.log(num);
	if(num == randNum){
		htmlObj.style.backgroundColor = 'hsla(130, 25%, 50%, 1)';
	}else{
		htmlObj.style.backgroundColor = 'hsla(10, 45%, 50%, 1)';
	}
}








