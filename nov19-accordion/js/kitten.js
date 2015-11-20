
var htmlObj = document.getElementsByTagName('html')[0],
	litterBox = document.getElementById('litterBox'),
	guessBox = document.querySelector('input[type="text"]'),
	submitBtn = document.querySelector('input[type="submit"]'),
	resetBtn = document.querySelector('input[type="reset"]'),
	badges = document.querySelectorAll('#catCounter img');

var strayCats = 0;
var cat = '<img src="img/kitten.png" height="925" width="800" alt="cat">';

submitBtn.addEventListener('click', submitGuess);
resetBtn.addEventListener('click', clearGame);

function startGame(){
	litterBox.innerHTML = '';
	strayCats = randomNum(5);

	for(var i = 0; i < strayCats; i++){
		litterBox.innerHTML += cat;
	}
}
startGame();

function submitGuess(evt){
	evt.preventDefault();
	var guess = guessBox.value;
	guessBox.disabled = true;
	checkGame(guess);
}

function randomNum(max){
	return Math.floor(Math.random() * (max - 1 + 1)) + 1;
}

function checkGame(guess){
	if(!isNaN(parseInt(guess)) && guess == strayCats){
		getAward(true);
	}else{
		getAward(false);
	}
}

function getAward(x){
	badges[+x].style.display = 'block';
	if(x){
		htmlObj.style.backgroundColor = 'hsla(100, 20%, 40%, 1)';
	}else{
		htmlObj.style.backgroundColor = 'hsla(0, 20%, 50%, 1)';
	}
}

function clearGame(){
	litterBox.innerHTML = '';
	guessBox.value = '';
	guessBox.disabled = false;
	htmlObj.style.backgroundColor = 'white';
	startGame();
	for(var i = 0; i < badges.length; i++){
		badges[i].style.display = 'none';
	}
}








