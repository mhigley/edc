/* js goes here */

var leftBtn = document.getElementById('left'),
	rightBtn = document.getElementById('right'),
	imgs = document.querySelectorAll('#hero div'),
	hero = document.getElementById('hero'),
	heroDiv = document.getElementById('hero').getElementsByTagName('div');

//console.log(imgs.parentNode);

var l = 0;
heroDiv[l].classList.add('active');

leftBtn.addEventListener('click', function(){
	if(l < heroDiv.length-1){
		l++;
		for(var i = 0; i < heroDiv.length+2; i++){
			hero.children[i].classList.remove('active');
		}
		heroDiv[l].classList.add('active');
	}
});

rightBtn.addEventListener('click', function(){
	if(l > 0){
		l--;
		for(var i = 0; i < heroDiv.length+2; i++){
			console.log(hero.children[i]);
			hero.children[i].classList.remove('active');
		}
		heroDiv[l].classList.add('active');
	}
});


























var guy = document.getElementById('guy'),
	lite = document.getElementsByTagName('span');


function liteemup(x){
	for(var i = 0; i < lite.length; i++){
		x.parentNode.children[i].classList.remove('lit');
	}
	x.classList.add('lit');
}

for(var i = 0; i < lite.length; i++){
	lite[i].addEventListener('click', function(){
		if(this === lite[0]){
			liteemup(this);
			guy.style.animationPlayState = 'paused';
		}else if(this === lite[1]){
			liteemup(this);
			guy.style.animationPlayState = 'running';
			guy.style.animationDuration = '2s';
		}else{
			liteemup(this);
			guy.style.animationPlayState = 'running';
			guy.style.animationDuration = '.75s';
		}
	});
}

