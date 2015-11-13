function reqStyle(x, y){
	return window.getComputedStyle(x, null).getPropertyValue(y);
}