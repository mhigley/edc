
var person = "Matt";
var anotherPerson = person;
person = "Higley";

// console.log(person);
// console.log(anotherPerson);

var person2 = {name: "Petra"};
var anotherPerson2 = person2;
person2.name = "Higley";

// console.log(person2.name);
// console.log(anotherPerson2.name);

function Promo(plan, price, speed, space, site) {
	this.plan = plan;
	this.price = price;
	this.speed = speed;
	this.space = space;
	this.site = site;
// 	this.showPlan = function(){
// 		console.log('This is the '+this.plan+' plan.');
// 	}
}
var Promo = function(){

}

var promo1 = new Promo('basic', 3.99, 1000, 100, 1);
var promo2 = new Promo('premium', 5.99, 2500, 250, 5);
var promo3 = new Promo('ultimate', 19.99, 5000, 1000, 10);


var scanPromos = function(){
	var mainObj = document.querySelector('main');

	var output = '<ul>';

	for(var i = 0; i < arguments.length; i++){
		for(var key in arguments[i]){
			output += '<li><p>Promo key: '+ key +', Promo value: '+ arguments[i][key]+'</p></li>';
		}
	}
	output += '</ul>';
	mainObj.innerHTML = output;

}(promo1, promo2, promo3);













