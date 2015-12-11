/* js goes here */

var copyrightDate = document.querySelector('footer span'),
	secondHand = document.querySelector('#second');
	//minuteHand = document.querySelector('#minute'),
	//hourHand = document.querySelector('#hour');
	
var currYear = new Date();
var year = currYear.getFullYear();
var second = currYear.getSeconds();
var timerId = window.setInterval(getTime, 1000);

var aSec = 360/60;
var anHour = 360/12;
var shadowPos = 20/60;


var cycle;
if(second <= 29){
	cycle = second;
}else{
	cycle = 59 - second;
}


//currShadowY = second * shadowPos;

secondHand.style['-webkit-filter'] = 'drop-shadow(0px '+ cycle-15 +'px 5px black)';
secondHand.style['filter'] = 'drop-shadow(0px '+ cycle-15 +'px 5px black)';

//console.log(currShadowY);
// if(second > 29){
	
// 	console.log(currShadowY);
// }else{
// 	console.log('less than');
// }

function getTime(){
	//console.log(currShadowY);
	var thisYear = new Date();
	//var thisHour = (thisYear.getHours() * anHour);
	//var thisMin = (thisYear.getMinutes() * aSec);
	var thisSec = (thisYear.getSeconds() * aSec);
	var currSec = thisYear.getSeconds();

	//console.log(currSec);
	if(currSec <= 29){
		++cycle;
	}else{
		--cycle;
	}
	console.log(cycle-15);
	// if(currSec <= 30){
	// 	cycle++;
	// 	console.log(cycle);
	// 	//currShadowY -= shadowPos;
	// }else{
	// 	cycle--;
	// 	console.log(cycle);
	// 	//currShadowY += shadowPos;
	// }
	//console.log(currSec + ':' + currShadowY);
	//console.log(currShadowY);
	//console.log(currShadowY);

	secondHand.style.transform = 'translate3d(-50%, 0, 0) rotate('+thisSec+'deg)';
	secondHand.style['-webkit-filter'] = 'drop-shadow(0px '+ cycle-15 +'px 5px black)';
	secondHand.style['filter'] = 'drop-shadow(0px '+ cycle-15 +'px 5px black)';
	//minuteHand.style.transform = 'translate3d(-50%, 0, 0) rotate('+thisMin+'deg)';
	//hourHand.style.transform = 'translate3d(-50%, 0, 0) rotate('+thisHour+'deg)';

}

copyrightDate.textContent = year;