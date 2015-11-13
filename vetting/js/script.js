/* js goes here */

var mainObj = document.getElementById('main');
function $(id){
	return document.getElementById(id);
}

function setGlobalListeners(){
	if($('task1')) $('task1').addEventListener('click', loadTask1);
	if($('task2')) $('task2').addEventListener('click', loadTask2);
	if($('task3')) $('task3').addEventListener('click', loadTask3);
	if($('task4')) $('task4').addEventListener('click', loadTask4);
	if($('task5')) $('task5').addEventListener('click', loadTask5);
	if($('task6')) $('task6').addEventListener('click', loadTask6);
	$('home').addEventListener('click', loadHome);
}
setGlobalListeners();

function loadTask1(e){
	e.preventDefault();
	mainObj.innerHTML = task1;
	setGlobalListeners();
}

function loadTask2(e){
	e.preventDefault();
	mainObj.innerHTML = task2;
	setGlobalListeners();
}

function loadTask3(){
	mainObj.innerHTML = task3;
}

function loadTask4(){
	mainObj.innerHTML = task4;
}

function loadTask5(){
	mainObj.innerHTML = task5;
}

function loadTask6(){
	mainObj.innerHTML = task6;
}

function loadHome(e){
	e.preventDefault();
	mainObj.innerHTML = home;
	setGlobalListeners();
}

var task1 = 
	'<div class="content">'+
		'<ul id="tasknav">'+
			'<li class="active"><a href="#" id="task1"><i class="fa fa-tag"></i></a></li>'+
			'<li><a href="#" id="task2"><i class="fa fa-camera-retro"></i></a></li>'+
			'<li><a href="#" id="task3"><i class="fa fa-cloud"></i></a></li>'+
			'<li><a href="#" id="task4"><i class="fa fa-cube"></i></a></li>'+
			'<li><a href="#" id="task5"><i class="fa fa-file-text"></i></a></li>'+
			'<li><a href="#" id="task6"><i class="fa fa-plane"></i></a></li>'+
		'</ul>'+
		'<div>'+
			'<form action="#" method="post">'+
			    '<div>'+
			         '<label for="name">Text Input:</label>'+
			         '<input type="text" name="name" id="name" value="" tabindex="1" />'+
			    '</div>'+
			    '<div>'+
			         '<h4>Radio Button Choice</h4>'+
			         '<label for="radio-choice-1">Choice 1</label>'+
			         '<input type="radio" name="radio-choice-1" id="radio-choice-1" tabindex="2" value="choice-1" />'+
					 '<label for="radio-choice-2">Choice 2</label>'+
			         '<input type="radio" name="radio-choice-2" id="radio-choice-2" tabindex="3" value="choice-2" />'+
			    '</div>'+
				'<div>'+
					'<label for="select-choice">Select Dropdown Choice:</label>'+
					'<select name="select-choice" id="select-choice">'+
						'<option value="Choice 1">Choice 1</option>'+
						'<option value="Choice 2">Choice 2</option>'+
						'<option value="Choice 3">Choice 3</option>'+
					'</select>'+
				'</div>'+
				'<div>'+
					'<label for="textarea">Textarea:</label>'+
					'<textarea cols="40" rows="8" name="textarea" id="textarea"></textarea>'+
				'</div>'+
				'<div>'+
				    '<label for="checkbox">Checkbox:</label>'+
					'<input type="checkbox" name="checkbox" id="checkbox" />'+
			    '</div>'+

				'<div>'+
				    '<input type="submit" value="Submit" />'+
			    '</div>'+
			'</form>'+
		'</div>'+
	'</div>';

var task2 = 
	'<div class="content" id="lists">'+
		'<ul id="tasknav">'+
			'<li class="active"><a href="#" id="task1"><i class="fa fa-tag"></i></a></li>'+
			'<li><a href="#" id="task2"><i class="fa fa-camera-retro"></i></a></li>'+
			'<li><a href="#" id="task3"><i class="fa fa-cloud"></i></a></li>'+
			'<li><a href="#" id="task4"><i class="fa fa-cube"></i></a></li>'+
			'<li><a href="#" id="task5"><i class="fa fa-file-text"></i></a></li>'+
			'<li><a href="#" id="task6"><i class="fa fa-plane"></i></a></li>'+
		'</ul>'+
		'<div>'+
			'<ul>'+
			   '<li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</li>'+
			   '<li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</li>'+
			   '<li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</li>'+
			   '<li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</li>'+
			'</ul>'+
		'</div>'+
	'</div>';

var home = 
	'<div class="content">'+
		'<div class="hdr">'+
			'<h2>Gravida nunc accumsan</h2>'+
			'<p>Ipsum quis semper consequat, sem nibh mattis arcu, quis porttitor lorem justo in tellus. Aenean lacinia interdum nisl felis et dui viverra, nec accumsan tempus quam ultricies.</p>'+
		'</div>'+
		'<div>'+
			'<div class="card" id="task1">'+
				'<i class="fa fa-tag"></i>'+
				'<h3>Registration Page</h3>'+
				'<p>Feugiat lorem quis semper consequat, sem nibh mattis arcu, amet porttitor lorem justo in cumsan quam ultricies magna tempus.</p>'+
			'</div>'+
			'<div class="card" id="task2">'+
				'<i class="fa fa-camera-retro"></i>'+
				'<h3>Semper accumsan</h3>'+
				'<p>Feugiat lorem quis semper consequat, sem nibh mattis arcu, amet porttitor lorem justo in cumsan quam ultricies magna tempus.</p>'+
			'</div>'+
			'<div class="card">'+
				'<i class="fa fa-cloud"></i>'+
				'<h3>Ipsum lorem magna</h3>'+
				'<p>Feugiat lorem quis semper consequat, sem nibh mattis arcu, amet porttitor lorem justo in cumsan quam ultricies magna tempus.</p>'+
			'</div>'+
			'<div class="card">'+
				'<i class="fa fa-cube"></i>'+
				'<h3>Tempus sed mattis</h3>'+
				'<p>Feugiat lorem quis semper consequat, sem nibh mattis arcu, amet porttitor lorem justo in cumsan quam ultricies magna tempus.</p>'+
			'</div>'+
			'<div class="card">'+
				'<i class="fa fa-file-text"></i>'+
				'<h3>Odio fermentum</h3>'+
				'<p>Feugiat lorem quis semper consequat, sem nibh mattis arcu, amet porttitor lorem justo in cumsan quam ultricies magna tempus.</p>'+
			'</div>'+
			'<div class="card">'+
				'<i class="fa fa-plane"></i>'+
				'<h3>Risus et interdum</h3>'+
				'<p>Feugiat lorem quis semper consequat, sem nibh mattis arcu, amet porttitor lorem justo in cumsan quam ultricies magna tempus.</p>'+
			'</div>'+

		'</div>'+
	'</div>';


// $('regPage').addEventListener('click', loadPage);
// $('listsPage').addEventListener('click', loadListsPage);


function loadPage(){
	mainObj.innerHTML = registrationPage;
}
function loadListsPage(){
	mainObj.innerHTML = listsPage;
}

/*
var registrationPage =
	'<div class="content" id="registration">'+
		'<button type="button" class="btn btn-cta">next exercise</button>'+
		'<form action="#" method="post">'+
			'<div>'+
				'<label for="name">Text Input:</label>'+
				'<input type="text" name="name" id="name" value="" tabindex="1" />'+
			'</div>'+
			'<div>'+
				'<h4>Radio Button Choice</h4>'+

				'<label for="radio-choice-1">Choice 1</label>'+
				'<input type="radio" name="radio-choice-1" id="radio-choice-1" tabindex="2" value="choice-1" />'+

				'<label for="radio-choice-2">Choice 2</label>'+
				'<input type="radio" name="radio-choice-2" id="radio-choice-2" tabindex="3" value="choice-2" />'+
			'</div>'+

			'<div>'+
				'<label for="select-choice">Select Dropdown Choice:</label>'+
				'<select name="select-choice" id="select-choice">'+
				'<option value="Choice 1">Choice 1</option>'+
				'<option value="Choice 2">Choice 2</option>'+
				'<option value="Choice 3">Choice 3</option>'+
				'</select>'+
			'</div>'+

			'<div>'+
				'<label for="textarea">Textarea:</label>'+
				'<textarea cols="40" rows="8" name="textarea" id="textarea"></textarea>'+
			'</div>'+

			'<div>'+
				'<label for="checkbox">Checkbox:</label>'+
				'<input type="checkbox" name="checkbox" id="checkbox" />'+
			'</div>'+

			'<div>'+
				'<input type="submit" value="Submit" />'+
			'</div>'+
		'</form>'+
	'</div>';

var listsPage = 
	'<div class="content" id="lists">'+
		'<button type="button" class="btn btn-cta">next exercise</button>'+
		'<ul>'+
		   '<li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</li>'+
		   '<li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</li>'+
		   '<li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</li>'+
		   '<li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</li>'+
		'</ul>'+
	'</div>';
*/