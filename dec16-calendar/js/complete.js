/* js goes here */
var cal = document.querySelector('#cal .content');
var d = new Date();
var changeM = d.getMonth();

var nextBtn = document.getElementById('next').addEventListener('click', function(){
	changeD(d, changeM += 1);
}, false);

var prevBtn = document.getElementById('prev').addEventListener('click', function(){
	changeD(d, changeM -= 1);
}, false);

var setCal = function setCal(year, month, day){

	var dispD = new Date(year, month, 0);
	var output = '';
	switch(month){
		case 1:
			month = 'January';
			break;
		case 2:
			month = 'February';
			break;
		case 3:
			month = 'March';
			break;
		case 4:
			month = 'April';
			break;
		case 5:
			month = 'May';
			break;
		case 6:
			month = 'June';
			break;
		case 7:
			month = 'July';
			break;
		case 8:
			month = 'August';
			break;
		case 9:
			month = 'September';
			break;
		case 10:
			month = 'October';
			break;
		case 11:
			month = 'November';
			break;
		case 12:
			month = 'December';
			break;
	}
	var dispOffset = new Date(month + ' ' + '1, ' + year);
	output += '<div class="month"><h1>'+month + ' ' + year+'</h1></div><div class="days">';
	for(var h = 0; h < dispOffset.getDay(); h++){
		output += '<div></div>';
	}
	for(var i = 0; i < dispD.getDate(); i++){
		output += '<div>'+ (i+1) + '</div>'; 
	}
	output += '</div>';
	return output;

};

var initCal = function initCal(){
	var currD = arguments[0];

	var thisD = currD.getDate();
	var thisM = currD.getMonth()+1;
	var thisY = currD.getFullYear();

	cal.innerHTML = setCal(thisY, thisM, thisD);
}(d);

var changeD = function incM(){
	var currD = arguments[0];

	var thisD = currD.getDate();
	var thisM = currD.getMonth()+1;
	var thisY = currD.getFullYear();

	var newD = new Date(thisY, arguments[1], 0);
	
	var updatedD = newD.getDate();
	var updatedM = newD.getMonth()+1;
	var updatedY = newD.getFullYear(); 

	cal.innerHTML = setCal(updatedY, updatedM, updatedD);
};