var bodyObj = document.body,
	submitBtn = document.querySelector('#loginBox input[type="submit"]'),
	formObj = document.querySelector('#loginBox form');

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

submitBtn.addEventListener('click', function(evt){
	evt.preventDefault();
	var els = formObj.elements,
		len = els.length - 1,
		arr = [];

	for(var i = 0; i < len; i++){
	    arr.push(els[i].value);
	}
	console.log(arr);
	
});






