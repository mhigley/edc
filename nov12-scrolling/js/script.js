/* js goes here */

(function(){

	window.addEventListener('scroll', scrollFunc);
	window.addEventListener('resize', checkDims);

	function scrollFunc(evt){
		fixNav();
		colorChange();
	}

	var docH = 0;
	function checkDims(){
		docH = document.documentElement.scrollHeight;
	}
	checkDims();

	var bodyObj = document.body,
		hdrObj = document.getElementsByTagName('header')[0],
		mainObj = document.getElementsByTagName('main')[0];


	/**
	 * Function fetches css applied styles.
	 *   obj needs to be a js object
	 *   prop needs to be a css property
	 */
	function reqStyle(obj, prop){
		return parseInt( window.getComputedStyle(obj, null).getPropertyValue(prop) );
	}

	/**
	 * Function converting px to vw / vw to px.
	 *   num needs to be an integer
	 *
	 */
	function calcUnit(num){
		return (document.documentElement.clientWidth / num);
	}


	function fixNav(){
		var scrollDist = window.scrollY;

		if(scrollDist > reqStyle(bodyObj, 'padding-top')){
			hdrObj.classList.add('fixie');
			mainObj.style.paddingTop = (calcUnit(10) + hdrObj.clientHeight) + 'px';
		}else{
			hdrObj.classList.remove('fixie');
			mainObj.style.paddingTop = '10vw';
		}
	}

	function colorChange(){
		var winH = window.innerHeight;
		var scrollDist = window.scrollY;
		var degreeCon = Math.ceil( (360 / (docH - winH)) * 100) / 100;
		var hue = Math.round(degreeCon * scrollDist);
		bodyObj.style.backgroundColor = 'hsla('+hue+', 30%, 50%, 1)';
		console.log(hue);
	}

})();








