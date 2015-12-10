var userObj = document.getElementById('user');

localStorage.setItem('firstName', 5);
var userName = localStorage.getItem('firstName');

var car = {};
car.wheels = 4;
car.doors = 2;
car.model = "mustang";

localStorage.setItem('vehicle', car);

var outputCar = localStorage.getItem('vehicle');

userObj.textContent = outputCar;



if(localStorage.addName){
	addName();
}

function addName(){
	return
}


/*var userObj = document.getElementById('user');
var userNum = "Please select a number greater than 10";

var isItGreater = function(num){
	num = parseInt(num);
	if(num >= 10){
		userObj.textContent = 'You chose a number greater than 10. You chose ' + num;
	}else{
		userNum = prompt("Please select again");
		isItGreater(userNum);
	}
};
//isItGreater(userNum);
var randomNum = 0;
// for(var i = 0; i < 50; i++){
// 	randomNum = Math.floor(Math.random() * 11);
// 	console.log(randomNum);
// }

for(var i = 0; i < 1; i++){
	randomNum = Math.floor(Math.random() * 11);
	console.log(randomNum);
	// randomNum = randomNum * 11;
	// console.log(randomNum);
	// randomNum = Math.floor(randomNum);
	// console.log(randomNum);
}

//return Math.floor(Math.random() * (10 - 0 + 1)) + 0;
//return Math.floor(Math.random() * (max - min + 1)) + min;*/