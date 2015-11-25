/* js goes here */

var htmlObj = document.getElementsByTagName('html')[0];
var dropdowns = document.getElementsByClassName('dropdown');
var optionsForm = document.getElementsByTagName('form')[0];

function loopDropdowns(){
	for(var i = 0; i < dropdowns.length; i++){
		dropdowns[i].addEventListener('click', toggleDropdown);
	}
}
loopDropdowns();

function toggleDropdown(){
	this.classList.toggle('visible');
	console.log(this);
}



