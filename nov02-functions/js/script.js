/* js goes here */

var clickBtn = document.getElementsByTagName('button')[0],
	inputEl = document.getElementsByTagName('input'),
	resultEl = document.getElementById('results');

clickBtn.addEventListener('click', disableMe);
inputEl[1].addEventListener('click', getInfo);

// var foo = document.getElementById("foo");
// var parent = foo.parentNode;
// var helper = document.createElement('div');
// helper.innerHTML = yourHTMLString;
// while (helper.firstChild) {
//     parent.insertBefore(helper.firstChild, foo);
// }


function getUsername(){
	var firstname = prompt("Hi there... before we begin, what is your first name?"),
		newEl = document.createElement('h1'),
		parentEl = clickBtn.parentNode;

	newEl.textContent = "Welcome "+firstname+", please press the Click Me button to continue";
	if(isNaN(firstname)){
		parentEl.insertBefore(newEl, clickBtn);
	}
}
getUsername();

function getRand(x){
	var y = Math.floor(Math.random() * 100) + 1;
	return x * y;
}

function disableMe(){
	for(var i = 0; i < inputEl.length; i++){
		if(inputEl[i].disabled){
			inputEl[i].disabled = false;
		}else{
			inputEl[i].disabled = true;
			inputEl[0].value = '';
		}
	}
}

function getInfo(){
	var infoVal = inputEl[0].value;
	if(!!infoVal && !isNaN(infoVal)){
		resultEl.textContent = getRand(infoVal);
		disableMe();
	}else{
		inputEl[0].value = '';
		resultEl.textContent = infoVal + ' is not a number. Please choose again.';
	}
}

