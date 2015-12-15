/* js goes here */

var cal = document.querySelector('#cal .content');
var d = new Date();
var modM = d.getMonth();

var prevBtn = document.getElementById('prev').addEventListener('click', function(evt){
	modM -= 1;
	modD(evt, modM);
});

var nextBtn = document.getElementById('next').addEventListener('click', function(evt){
	modM += 1;
	modD(evt, modM);
});


var modD = function modD(){
	arguments[0].preventDefault();
	calcCal( new Date(d.getFullYear(), arguments[1], d.getDate()) );
};

var calcCal = function setCal(){
	var $date = arguments[0];

	var thisWD = $date.getDay(); //weekday is 0 based
	var thisD = $date.getDate();
	var thisM = $date.getMonth();  //month is 0 based
	var thisY = $date.getFullYear();

	cal.innerHTML = printCal(thisY, strMonth(thisM), dayOfWeek(thisY, thisM), daysInMonth(thisY, thisM));
};

var dayOfWeek = function dayOfWeek(year, month){
	return new Date(year, month).getDay();
};

var daysInMonth = function daysInMonth(year, month){
	//return new Date(year, month, 0).getDate();
	return 32 - new Date(year, month, 32).getDate();
};

var strWeekday = function getWeekday(wd){ //return string weekday name
	switch(wd){
		case 0:
			wd = 'Sunday';
			break;
		case 1:
			wd = 'Monday';
			break;
		case 2:
			wd = 'Tuesday';
			break;
		case 3:
			wd = 'Wednesday';
			break;
		case 4:
			wd = 'Thursday';
			break;
		case 5:
			wd = 'Friday';
			break;
		case 6:
			wd = 'Saturday';
			break;
	}
	return wd;
};

var strMonth = function getMonth(m){ //return string month name
	switch(m){
		case 0:
			m = 'January';
			break;
		case 1:
			m = 'February';
			break;
		case 2:
			m = 'March';
			break;
		case 3:
			m = 'April';
			break;
		case 4:
			m = 'May';
			break;
		case 5:
			m = 'June';
			break;
		case 6:
			m = 'July';
			break;
		case 7:
			m = 'August';
			break;
		case 8:
			m = 'September';
			break;
		case 9:
			m = 'October';
			break;
		case 10:
			m = 'November';
			break;
		case 11:
			m = 'December';
			break;
	}
	return m;
};

var printCal = function printCal(year, month, dayOfWeek, days, today){
	var output = '<div class="month"><h1>'+ month + ' ' + year +'</h1></div>';
	output += '<div class="daysOfWeek"><span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</div>';
	output += '<div class="days">';
	for(var i = 0; i < dayOfWeek; i++){
		output += '<div></div>';
	}
	for(var j = 0; j < days; j++){
		output += '<div>'+ (j+1) + '</div>';
	}
	output += '</div>';
	return output;
};

var initCal = function initCal(){
	calcCal(d);
}(d);
