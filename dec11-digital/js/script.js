/* js goes here */
var nums = document.getElementsByClassName('num'), //set array of elements
	cols = document.getElementsByClassName('colon'), //set array of elements
	timerId = window.setInterval(runClock, 1000); //set interval timer

for(var i = 0; i < nums.length; i++){ //loop through array
	var num = document.createElement('img'); //create image element
	num.src = 'img/num-0.png'; //set default image source
	nums[i].appendChild(num); //append image to div
}
for(var j = 0; j < cols.length; j++){ //loop through array
	var col = document.createElement('img'); //create image element
	col.src = 'img/dots_on.png'; //set default image source
	cols[j].appendChild(col); //append image to div
}

var sDbl = document.querySelector('#ss-00 img'), //get image inside of id element
	sSgl = document.querySelector('#ss-0 img'), //get image inside of id element
	mDbl = document.querySelector('#mm-00 img'), //get image inside of id element
	mSgl = document.querySelector('#mm-0 img'), //get image inside of id element
	hDbl = document.querySelector('#hh-00 img'), //get image inside of id element
	hSgl = document.querySelector('#hh-0 img'); //get image inside of id element

function runClock(){
	var d = new Date(); //create a new instance of the Date object

	var hh = d.getHours(); //get Date hours
	var mm = d.getMinutes(); //get Date minutes
	var ss = d.getSeconds(); //get Date seconds

	var h = hh; //set h to equal hh
	if(hh >= 12){ //if 24 hour clock
		h = hh - 12; //set h to hh minus 12
	}

	h = h < 10 ? '0' + h : h; //ternary operator
	mm = mm < 10 ? '0' + mm : mm; //ternary operator
	ss = ss < 10 ? '0' + ss : ss; //ternary operator

	h = h.toString().split(''); //convert to string and split into array
	mm = mm.toString().split(''); //convert to string and split into array
	ss = ss.toString().split(''); //convert to string and split into array

	sDbl.src = 'img/num-' + ss[0] + '.png'; //set source to 0th array element
	sSgl.src = 'img/num-' + ss[1] + '.png'; //set source to 1st array element
	mDbl.src = 'img/num-' + mm[0] + '.png'; //set source to 0th array element
	mSgl.src = 'img/num-' + mm[1] + '.png'; //set source to 1st array element
	hDbl.src = 'img/num-' + h[0] + '.png'; //set source to 0th array element
	hSgl.src = 'img/num-' + h[1] + '.png'; //set source to 1st array element

	//getSeconds(thisTime.getSeconds());
	//getMinutes(thisTime.getMinutes());
	//getHours(thisTime.getHours());
}

/*
function getMilliseconds(x){
	var sec = x.toString();
	if(sec < 10){
		sec = '0'+sec;
	}
	milliDouble.src = 'img/num-'+sec.split('')[0]+'.png';
	milliSingle.src = 'img/num-'+sec.split('')[1]+'.png';
}

function getSeconds(x){
	var sec = x.toString();
	if(sec < 10){
		sec = '0'+sec;
	}
	secDouble.src = 'img/num-'+sec.split('')[0]+'.png';
	secSingle.src = 'img/num-'+sec.split('')[1]+'.png';
}

function getMinutes(x){
	var sec = x.toString();
	if(sec < 10){
		sec = '0'+sec;
	}
	minDouble.src = 'img/num-'+sec.split('')[0]+'.png';
	minSingle.src = 'img/num-'+sec.split('')[1]+'.png';
}

function getHours(x){
	var sec = x.toString();
	if(sec < 10){
		sec = '0'+sec;
	}
	hourDouble.src = 'img/num-'+sec.split('')[0]+'.png';
	hourSingle.src = 'img/num-'+sec.split('')[1]+'.png';
}
*/





