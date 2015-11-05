/* js goes here */

var loginBtn = document.getElementById('login'),
	loginBox = document.getElementById('loginBox'),
	username = document.getElementById('username'),
	password = document.getElementById('password'),
	hdrConfirm = document.getElementById('hdr'),
	mainEl = document.getElementsByTagName('main')[0],
	savedUsername = 'matthewhigley',
	savedPassword = 'j4v4scr1pt';

loginBtn.addEventListener('click', toggleLoginBox);

function toggleLoginBox(){
	loginBox.classList.toggle('active');
	username.value = "";
	password.value = "";
	username.classList.remove('error');
	password.classList.remove('error');
}

function calcNums(x, y){
	return x * y;
}

function userLogin(){
	var unValue = username.value;
	var pwValue = password.value;
	if(unValue === savedUsername && pwValue === savedPassword){
		//hdrConfirm.textContent = "YOU'RE IN!!";
		toggleLoginBox();
		//window.location = 'http://google.com';
		//document.write('<h1>whaa?</h1>');
		//mainEl.innerHTML = "<iframe src='http://google.com'></frame>";
	}

	if(!unValue || unValue !== savedUsername){
		username.classList.add('error');
	}else{
		username.classList.remove('error');
	}

	if(!pwValue || pwValue !== savedPassword){
		password.classList.add('error');
	}else{
		password.classList.remove('error');
	}
}









//

var nameLI = document.getElementById('name'),
	addressLI = document.getElementById('address'),
	cityStateZipLI = document.getElementById('cityStateZip'),
	getterLI = document.getElementById('getter');

console.log( getterLI.innerHTML );



var myFirstName = '<h1>Matthew</h1>',
	myLastName = 'Higley',
	myAddress = '4742 E Donner Ave',
	myCity, myState, myZip;


nameLI.innerHTML = myFirstName + ' ' + myLastName;
addressLI.textContent = myAddress;


function getInfo(){
	myCity = prompt('what city');
	myState = prompt('what state');
	myZip = parseInt(prompt('what zip'));
	if(!myCity || !myState || !myZip){
		console.log('there was a problem');
		alert('please try again');
		getInfo();
	}else{
		var isCorrect = confirm('Is this correct?\n' + myCity + ', ' + myState + ', ' + myZip);
		if(!isCorrect){
			getInfo();
		}
		cityStateZipLI.textContent = myCity + ', ' + myState + ', ' + myZip;
		//alert('check this out');
		//alert('I live in ' + myCity + ' ' + myState + ', ' + myZip + '.');
	}
}