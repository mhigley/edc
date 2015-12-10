/* js goes here */

var globalObj = document.querySelector('#global');
var menuToggleBtn = document.querySelector('#menuToggleBtn');
var menuHideBtn = document.querySelector('#menuHideBtn');

menuToggleBtn.addEventListener('click', function(){
	globalObj.classList.toggle('toggleMenu');
});

menuHideBtn.addEventListener('click', function(){
	globalObj.classList.toggle('hideMenu');
});