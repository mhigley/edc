var btn = document.getElementById('toggle');
var img = document.getElementById('bg-img');
var num = 0;

btn.addEventListener("click", addClassName);

function addClassName(){
	num = Math.floor((Math.random() * 8) + 1);
	console.log(num);
	img.className = "";
	img.classList.add('img-'+num);
	//img.classList.toggle('active');
};