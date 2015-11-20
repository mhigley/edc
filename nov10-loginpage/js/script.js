var bodyObj = document.body,
	mainObj = document.getElementsByTagName('main')[0],
	timerId = window.setTimeout(displayLogin, 5000);

var formMarkup = 
	'<div id="loginBox">'+
		'<form>'+
			'<label for="username">'+
				'<span>username</span>'+
				'<input type="text" id="username" name="unInput">'+
				'<small></small>	'+
			'</label>'+
			'<label for="password">'+
				'<span>password</span>'+
				'<input type="password" id="password" name="pwInput">'+
				'<small></small>		'+
			'</label>'+
			'<label for="email">'+
				'<span>email</span>'+
				'<input type="email" id="email" name="eInput">'+
				'<small></small>		'+
			'</label>'+
			'<label for="phone">'+
				'<span>phone number</span>'+
				'<input type="text" id="phone" name="pInput">'+
				'<small></small>'+
			'</label>'+
			'<input type="submit" value="Submit">'+
		'</form>'+
	'</div>';

bodyObj.addEventListener('mousemove', checkDim);

function checkDim(evt){
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    var mouseX = evt.clientX;
    var mouseY = evt.clientY;
    
    var hue = (mouseY / winH) * 360;
    var lum = (mouseX / winW) * 100;
    
    bodyObj.style.backgroundColor = 'hsla('+ hue +', '+ lum +'%, '+ lum +'%, 1)';
}

function displayLogin(){
	clearTimeout(timerId);
	mainObj.innerHTML = formMarkup;
	var submitBtn = document.querySelector('#loginBox input[type="submit"]'),
		formObj = document.querySelector('#loginBox form');

	submitBtn.addEventListener('click', function(evt){
		evt.preventDefault();
		var els = formObj.elements,
			len = els.length - 1,
			arr = [];

		for(var i = 0; i < len; i++){
			if(!els[i].value){
				els[i].nextElementSibling.innerHTML = 'Please fill in the input';
			}else{
				els[i].nextElementSibling.innerHTML = '';
				arr.push(els[i].value);
			}
		}
		console.log(arr);
	});
}





