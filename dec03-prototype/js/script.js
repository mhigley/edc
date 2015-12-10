/* js goes here */
'use strict';

var Recipe = function(title, time, temp, ingredients, image){
	this.title = title;
	this.time = time;
	this.temp = temp;
	this.ingredients = ingredients;
	this.image = image;
};

Recipe.prototype.card = 'white';
Recipe.prototype.iLove = function(){
	console.log('I Love '+ this.title);
}

var recipe1 = new Recipe('Stuffed Mushrooms', 25, 375, ['mushrooms', 'garlic', 'dill', 'tomatoes'], 'http://www.the-girl-who-ate-everything.com/wp-content/uploads/blogger/-Rvp6UaXTYvU/TytitxqgnEI/AAAAAAAAIEQ/GIj8V5WQXOQ/s1600/stuffed-mushrooms.JPG');
var recipe2 = new Recipe('Steamed Carrots', 15, 325, ['carrots', 'oregano', 'salt', 'pepper'], 'http://www.meepanda.com/wp-content/uploads/2014/12/IMG_5654-Version-2.jpg');
var recipe3 = new Recipe('Broiled Steak', 25, 450, ['steak', 'salt', 'garlic'], 'http://aspenridgebeef.com/wp-content/uploads/2012/10/Traditional-Broiled-Steak1.jpg');
var recipe4 = new Recipe('Gingerbread Cookies', 45, 300, ['ginger', 'bread', 'sugar', 'elves'], 'http://www.sweetsugarbelle.com/blog/wp-content/uploads/2010/12/Gingerbread-Cookies_Sweetsugarbelle-3-600x815.jpg');
var recipe5 = new Recipe('Orange Juice', 5, 475, ['oranges', 'juice', 'elbow grease'], 'http://i.dailymail.co.uk/i/pix/2010/01/02/article-0-071A1B1C000005DC-861_468x479.jpg');

var printRecipe = function(){
	var mainObj = document.querySelector('main');
	
	for(var i = 0; i < arguments.length; i++){
		var recipeCard = document.createElement('div');
		recipeCard.className = 'recipeCard';

		arguments[i].iLove();

		var recipe =
			'<div class="img" style="background-image: url('+ arguments[i].image +');"></div>'+
			'<div class="content" style="background-color: '+arguments[i].card+'">'+
			'<h1>'+ arguments[i].title +'</h1>'+
			'<ol>'+
				'<li>Cooking time: '+ arguments[i].time +'</li>'+
				'<li>Cooking temperature: '+ arguments[i].temp +'</li>'+
			'</ol>'+
			'<ul>';
			for(var j = 0; j < arguments[i].ingredients.length; j++){
				recipe += '<li>'+ arguments[i].ingredients[j] +'</li>';
			}
			recipe += '</ul></div>';

		mainObj.appendChild(recipeCard).innerHTML = recipe;
	}

	// var imgObj = document.querySelectorAll('.img');
	// for(var k = 0; k < imgObj.length; k++){
	// 	imgObj[k].style.backgroundImage = 'url('+arguments[k].image+')';
	// }
}(recipe1, recipe2, recipe3, recipe4, recipe5);






