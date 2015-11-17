var htmlObj = document.querySelector('html');
var inputBox = document.querySelector('input[type="text"]');
var colorBox = document.querySelector('input[type="color"]');
var dateBox = document.querySelector('input[type="date"]');
var submitBtn = document.getElementsByTagName('button')[0];

submitBtn.addEventListener('click', function(){
	var valuE = inputBox.value;
	var coloR = colorBox.value;
	getName(valuE);
	getColor(coloR);
});

/*inputBox.addEventListener('blur', inputGrab);
function inputGrab(){
	var neuValuE = inputBox.value;
	console.log(neuValuE);
}*/

function getColor(y){
	htmlObj.style.backgroundColor = y;
}

function getName(x){
	var resp = parseInt(x);

	if( !isNaN(resp) ){
		console.log(true);
	}
}