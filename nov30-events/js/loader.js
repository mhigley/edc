var imgThm = document.querySelectorAll('img.thm');

for(var i = 0; i < imgThm.length; i++){
	imgThm[i].addEventListener('click', showHiRes);
}

function showHiRes(evt){
	var loRes = evt.target.src;
	var overlay = document.querySelector('div.overlay');
	var hiRes = document.createElement('img');
	var spinner = document.createElement('i');

	overlay.style.display = 'block';
	hiRes.src = loRes.replace('85/85', '5000/4000');
	overlay.querySelector('.content').appendChild(hiRes);

	spinner.className = 'fa fa-refresh fa-spin';
	overlay.appendChild(spinner);

	hiRes.addEventListener('load', function(){
		spinner.parentElement.removeChild(spinner);
	});

	document.getElementsByClassName('close')[0].addEventListener('click', function(){
		overlay.querySelector('.content').innerHTML = '';
		overlay.style.display = 'none';
	})
}










