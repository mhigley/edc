/* js goes here */

var copyrightDate = document.querySelector('footer span'),
	secondHand = document.querySelector('#second'),
	minuteHand = document.querySelector('#minute'),
	hourHand = document.querySelector('#hour');
	
var currYear = new Date();
var year = currYear.getFullYear();
var timerId = window.setInterval(getTime, 250);

var aSec = 360/60;
var anHour = 360/12;

function getTime(){
	var thisYear = new Date();
	var thisHour = (thisYear.getHours() * anHour);
	var thisMin = (thisYear.getMinutes() * aSec);
	var thisSec = (thisYear.getSeconds() * aSec);

	secondHand.style.transform = 'translate3d(-50%, 0, 0) rotate('+thisSec+'deg)';
	minuteHand.style.transform = 'translate3d(-50%, 0, 0) rotate('+thisMin+'deg)';
	hourHand.style.transform = 'translate3d(-50%, 0, 0) rotate('+thisHour+'deg)';
}

copyrightDate.textContent = year;