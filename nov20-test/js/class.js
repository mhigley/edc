var navDropdowns = document.getElementsByClassName('dropdown');
var navTimer;

for(var i = 0; i < navDropdowns.length; i++){
	(function(){
		navDropdowns[i].addEventListener('mouseenter', delayDropdown);
		navDropdowns[i].addEventListener('mouseleave', hideDropdown);

		function showDropdown(x){
			clearTimeout(navTimer);
			x.querySelector('ul').style.display = 'block';

		}
		function hideDropdown(){
			clearTimeout(navTimer);
			this.querySelector('ul').style.display = 'none';
		}
		function delayDropdown(){
			navTimer = window.setTimeout(showDropdown, 250, this);
		}
	})();
}