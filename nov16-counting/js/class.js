
var catDisp = document.getElementById('catDisp');
var guessBox = document.querySelector('input[type="text"]');
var submitBtn = document.querySelector('input[type="submit"]');
var catCode = '<img src="img/kitten.png" height="925" width="800" alt="a cute kitten clone">';

//catDisp.innerHTML = catCode;
submitBtn.addEventListener('click', submitGuess);

function submitGuess(evt){
	evt.preventDefault();
	var guess = guessBox.value;

	checkGuess(guess);
}

function checkGuess(num){
	if(num == 5){
		console.log(true);
	}else{
		console.log(false);
	}
}



