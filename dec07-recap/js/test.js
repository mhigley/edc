var userObj = document.getElementById('user');
var userName = prompt('What is your name?');

userObj.textContent = userName;
userObj.innerHTML += '<h1>'+userName+'</h1>';