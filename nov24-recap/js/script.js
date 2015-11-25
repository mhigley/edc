/* js goes here */

var winObj = window;
var bodyObj = document.body;
var themeToggle = document.getElementById('theme-toggle');
var themeToggleBtn = themeToggle.firstElementChild;
var headerObj = document.getElementsByTagName('header')[0];
var navObj = document.getElementsByTagName('nav')[0];
var mainObj = document.getElementsByTagName('main')[0];

winObj.addEventListener('scroll', scrollDist);
themeToggleBtn.addEventListener('click', toggleTheme);

function scrollDist(){
	var scrollHeight = winObj.scrollY;
	var headerHeight = headerObj.clientHeight;
	var navHeight = navObj.clientHeight;
	if(scrollHeight > headerHeight){
		navObj.classList.add('fixed');
		mainObj.style.paddingTop = navHeight + 'px';
	}else{
		navObj.classList.remove('fixed');
		mainObj.style.paddingTop = '0px';
	}
}

function toggleTheme(){
	console.log(bodyObj.className);
	if(bodyObj.className === 'lite-theme'){
		themeToggleBtn.innerHTML = '<i class="fa fa-sun-o"></i>';
		bodyObj.className = 'dark-theme';
	}else{
		themeToggleBtn.innerHTML = '<i class="fa fa-moon-o"></i>';
		bodyObj.className = 'lite-theme';
	}
}