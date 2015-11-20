/* js goes here */

(function(){

var mainObj = document.getElementsByTagName('main')[0];

function $(id){
	return document.getElementById(id);
}

function setListeners(){
	if($('page1')){
		$('page1').addEventListener('click', loadPage1);
	}
	if($('page2')) $('page2').addEventListener('click', loadPage2);
	if($('page3')) $('page3').addEventListener('click', loadPage3);
	if($('page4')) $('page4').addEventListener('click', loadPage4);
}
setListeners();

function page2Listeners(){
	var textObj = document.getElementsByTagName('textarea')[0],
	keyOutput = document.querySelector('#typing div p:first-child'),
	delOutput = document.querySelector('#typing div p:last-child'),
	timeOutput = document.querySelector('#typing p:first-child');
	var characterNum = 0;
	var deleteNum = 0;

	var keyTimer,
		timeStart = 5,
		timeLeft= timeStart;

	textObj.addEventListener('keypress', getCharacter);
	textObj.addEventListener('keydown', checkDelete);
	textObj.addEventListener('focus', keyTimer);

	/* TYPING FUNCTIONS */
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
}

var page1 = 
	'<div class="content">'+
		'<span>'+
			'<button id="page1" disabled>prev</button>'+
			'<button id="page2">next</button>'+
		'</span>'+
		'<div>'+
			'<h1>This is page one</h1>'+
		'</div>'+
	'</div>';

var page2 = 
	'<div class="content">'+
		'<span>'+
			'<button id="page1">prev</button>'+
			'<button id="page3">next</button>'+
		'</span>'+
		'<div id="typing">'+
			'<p></p>'+
			'<textarea name="" id="" cols="40"></textarea>'+
			'<div>'+
				'<p>0</p>/<p>0</p>'+
			'</div>'+
		'</div>'+
	'</div>';

var page3 = 
	'<div class="content">'+
		'<span>'+
			'<button id="page2">prev</button>'+
			'<button id="page4">next</button>'+
		'</span>'+
		'<div>'+
			'<h1>This is page three</h1>'+
		'</div>'+
	'</div>';

var page4 = 
	'<div class="content">'+
		'<span>'+
			'<button id="page3">prev</button>'+
			'<button id="page1">home</button>'+
		'</span>'+
		'<div>'+
			'<h1>This is page four</h1>'+
		'</div>'+
	'</div>';

function loadPage1(){
	mainObj.innerHTML = page1;
	setListeners();
}

function loadPage2(){
	mainObj.innerHTML = page2;
	setListeners();
	page2Listeners();
}

function loadPage3(){
	mainObj.innerHTML = page3;
	setListeners();
}

function loadPage4(){
	mainObj.innerHTML = page4;
	setListeners();
}

})();









