/* js goes here */

var figureBtn = document.querySelectorAll('.figcontent a');
var figImage = document.querySelectorAll('.figimage');

for(var i = 0; i < figureBtn.length; i++){
	figureBtn[i].addEventListener('mouseenter', figBtnEnter);
	figureBtn[i].addEventListener('mouseleave', figBtnLeave);
}

for(var i = 0; i < figImage.length; i++){
	figImage[i].addEventListener('mouseenter', figImgEnter);
	figImage[i].addEventListener('mouseleave', figImgLeave);
}

function figBtnEnter(){
	this.style.backgroundColor = 'hsla(44, 18%, 65%, 1)';
	this.style.borderColor = 'hsla(46, 18%, 56%, 1)';
	this.style.color = 'hsla(0, 0%, 100%, 1)';

	var imgEl = this.parentElement.previousElementSibling.lastElementChild;
	console.log(imgEl);
	imgEl.style.top = '0%',
	imgEl.style.transitionPropery = 'all';
	imgEl.style.transitionDuration = '250ms';
	imgEl.style.transitionTimingFunction = 'ease-in-out';
}

function figBtnLeave(){
	this.style.backgroundColor = 'hsla(44, 18%, 75%, 1)';
	this.style.borderColor = 'hsla(46, 18%, 66%, 1)';
	this.style.color = 'hsla(0, 0%, 19%, 1)';

	var imgEl = this.parentElement.previousElementSibling.lastElementChild;
	imgEl.style.top = '100%',
	imgEl.style.transitionPropery = 'all';
	imgEl.style.transitionDuration = '250ms';
	imgEl.style.transitionTimingFunction = 'ease-in-out';
}

function figImgEnter(){
	var imgHover = this.firstElementChild;
	imgHover.style.transform = 'scale(1.15)';
	imgHover.style.transitionPropery = 'all';
	imgHover.style.transitionDuration = '500ms';
	imgHover.style.transitionTimingFunction = 'ease-in-out';
}

function figImgLeave(){
	var imgHover = this.firstElementChild;
	imgHover.style.transform = 'scale(1)';
	imgHover.style.transitionPropery = 'all';
	imgHover.style.transitionDuration = '500ms';
	imgHover.style.transitionTimingFunction = 'ease-in-out';
}
