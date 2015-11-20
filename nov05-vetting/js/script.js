/* js goes here */

var textObj = document.getElementsByTagName('textarea')[0],
	keyOutput = document.querySelector('main div p:first-child'),
	delOutput = document.querySelector('main div p:last-child'),
	timeOutput = document.querySelector('main p:first-child');
var characterNum = 0;
var deleteNum = 0;

var keyTimer,
	timeStart = 5,
	timeLeft= timeStart;

textObj.addEventListener('keypress', getCharacter);
textObj.addEventListener('keydown', checkDelete);
textObj.addEventListener('focus', keyTimer);


function checkDelete(evt){
	if(evt.which == 8 || evt.which == 46){
		deleteNum = deleteNum + 1;
		delOutput.textContent = deleteNum;
	}
}

function getCharacter(evt){
	var character;
	if(evt.which == null){
		character = String.fromCharCode(evt.keyCode);
	}else if(evt.which != 0 && evt.keyCode != 0){
		character = String.fromCharCode(evt.which);
	}else{
		console.log('special key');
	}
	countCharacters();
}

function countCharacters(){
	characterNum = characterNum + 1;
	keyOutput.textContent = characterNum;
}

function keyTimer(){
	keyTimer = setInterval(countDown, 1000);
}

function countDown(){
	if(timeLeft === 0){
		clearTimeout(keyTimer);
		timeOutput.textContent = "Times Up!";
		wrapUp();
	}else{
		timeOutput.textContent = timeLeft;
		timeLeft--;
	}
}

function wrapUp(){
	textObj.readOnly = true;
}








