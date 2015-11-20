var selectOpt0 = document.getElementsByTagName('select')[0],
	paraObj0 = document.getElementsByTagName('p')[0];

selectOpt0.addEventListener('change', function(){
	var selectedOption = this.value;
	var selectedText = this.options[this.selectedIndex].innerHTML;
	popup(selectedText);
	switch(selectedOption){
		case 'jan':
			paraObj0.textContent = 'You selected ' + selectedText;
			break;
		case 'feb':
			paraObj0.textContent = 'You selected ' + selectedText;
			break;
		case 'mar':
			paraObj0.textContent = 'You selected ' + selectedText;
			break;
		case 'apr':
			paraObj0.textContent = 'You selected ' + selectedText;
			break;
		case 'may':
			paraObj0.textContent = 'You selected ' + selectedText;
			break;
		case 'jun':
			paraObj0.textContent = 'You selected ' + selectedText;
			break;
		case 'jul':
			paraObj0.textContent = 'You selected ' + selectedText;
			break;
		case 'aug':
			paraObj0.textContent = 'You selected ' + selectedText;
			break;
		case 'sep':
			paraObj0.textContent = 'You selected ' + selectedText;
			break;
		case 'oct':
			paraObj0.textContent = 'You selected ' + selectedText;
			break;
		case 'nov':
			paraObj0.textContent = 'You selected ' + selectedText;
			break;
		case 'dec':
			paraObj0.textContent = 'You selected ' + selectedText;
			break;
	}
});

var selectOpt1 = document.getElementsByTagName('select')[1],
	paraObj1 = document.getElementsByTagName('p')[1];

selectOpt1.addEventListener('change', function(){
	var selectedOption = this.value;
	var selectedText = this.options[this.selectedIndex].innerHTML;
	popup(selectedText);
	switch(selectedOption){
		case 'mon':
		case 'tue':
		case 'wed':
			paraObj1.textContent = "I can't wait for the weekend.";
			console.log(selectedOption);
			break;
		case 'thu':
		case 'fri':
			paraObj1.textContent = "We're just about there.";
			console.log(selectedOption);
			break;
		case 'sat':
		case 'sun':
			paraObj1.textContent = "It's finally the weekend.";
			console.log(selectedOption);
			break;
		default:
			paraObj1.textContent = "Everyday should be "+selectedOption+"day.";
			console.log(selectedOption);
	}
});

function popup(x){
	alert(x);
}



