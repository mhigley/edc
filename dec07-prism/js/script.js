/* js goes here */
var bodyObj = document.body;
var scrollyHdr = document.querySelector('header.scrolly');
var fixieHdr = document.querySelector('header.fixie');
var mainObj = document.querySelector('main');

window.addEventListener('scroll', function scrollMe(evt){
	scrollDist(evt, this);
}, false);

var header_max = 
	'<div>'+
		'<h1>Welcome to Prism, a free responsive site template by TEMPLATED</h1>'+
	'</div>'+
	'<div>'+
		'<h2>Lorem ipsum nisl sed cursus magna et amet veroeros. Phasellus aliquam et tempus lorem dolor feugiat adipiscing lorem.</h2>'+
		'<a href="#" class="btn btn-cta">Get Started</a>'+
	'</div>';
var header_min = 
	'<div>'+
		'<h1>Prism</h1>'+
	'</div>'+
	'<div>'+
		'<a href="#" class="btn btn-cta">Get Started</a>'+
	'</div>';

var scrollDist = function(e, x){
	var scrollH = window.scrollY;
	var scrollyH = scrollyHdr.clientHeight;

	if(scrollH > scrollyH){
		fixieHdr.style.top = '0em';
		//scrollyHdr.style.display = 'none';
		// mainObj.style.paddingTop = headerH+'px';
		// headerObj.classList.add('fixie');
		// headerObj.innerHTML = header_min;
	}else{
		fixieHdr.style.top = '-10em';
		// mainObj.style.paddingTop = '0px';
		// headerObj.classList.remove('fixie');
		// headerObj.innerHTML = header_max;
	}
};


