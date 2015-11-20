/* js goes here */

var bodyObj = document.getElementsByTagName('body')[0],
	divObj = document.querySelector('main div');



function makeBall(){
	var ballW = '50px',
		ballH = '50px',
		ballClr = 'mediumpurple',
		ballRadi = '100%',
		ballX = '100px',
		ballY = '100px',
		ballPos = 'absolute',
		ballTrans = 'translate3d(-50%, -50%, 0)';
	divObj.style.width = ballW;
	divObj.style.height = ballH;
	divObj.style.backgroundColor = ballClr;
	divObj.style.borderRadius = ballRadi;
	divObj.style.left = ballX;
	divObj.style.top = ballY;
	divObj.style.position = ballPos;
	divObj.style.transform = ballTrans;
}
makeBall();

//console.log(divObj.style.left = '20px');
var keyCollection;
bodyObj.addEventListener('keydown', function(evt){
	/*if(!keyCollection){
		keyCollection = String.fromCharCode(e.keyCode);
	}else{
		keyCollection = keyCollection += String.fromCharCode(e.keyCode);
	}
	console.log(keyCollection);*/
	//console.log(this);
	//console.log(evt);
});

bodyObj.addEventListener('click', function(evt){
	var mouseX = evt.x;
	var mouseY = evt.y;
	moveBall(mouseX, mouseY);
});

function moveBall(x, y){
	divObj.style.left = x+'px';
	divObj.style.top = y+'px';
}


//console.log(String.fromCharCode());