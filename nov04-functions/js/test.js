var formObj = document.getElementsByTagName('form');
var formEls = document.forms[0].getElementsByTagName('input');
var formLen = document.forms[0].length;
var formInfo;
var formArr = [];

var submitBtn = document.forms[0].querySelector('input[type="submit"]');
submitBtn.addEventListener('click', function(evt){
	evt.preventDefault();
	getInfo();
});


function getInfo(){
	for(var i = 0; i < formLen - 1; i++){
		formInfo = formObj[0].elements[i].value;
		if(!!formInfo){
			formArr.push(formInfo);
		}
	}
	console.log(formArr);
}