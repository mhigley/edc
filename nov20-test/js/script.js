/* js goes here */

var navDropdowns = document.getElementsByClassName('dropdown');
var navTimer;

for(var i = 0; i < navDropdowns.length; i++){
	(function(){
		navDropdowns[i].addEventListener('mouseenter', delayDropdown);
		navDropdowns[i].addEventListener('mouseleave', hideDropdown);

		function hideDropdown(){
			clearTimeout(navTimer);
			this.querySelector('ul').style.display = 'none';
		}

		function showDropdown(el){
			clearTimeout(navTimer);
			el.querySelector('ul').style.display = 'block';
		}

		function delayDropdown(){
			navTimer = window.setTimeout(showDropdown, 500, this);
		}
	})();
}



