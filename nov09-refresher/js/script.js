var myArr = ['carrie', 'rachel', 'gloria', 'francine', 'eric', 'ness', 'julian', 'tom'];

var bodyObj = document.body;
bodyObj.innerHTML = '<button id="btn">a button</button>';

var btnObj = document.getElementById('btn');

function setBtnPos(){
    bodyObj.parentNode.style.height = '100%';
    bodyObj.style.height = '100%';
    btnObj.style.position = 'absolute';
    btnObj.style.left = '100px';
    btnObj.style.top = '100px';
    btnObj.style.transform = 'translate3d(-50%, -50%, 0)';
}
setBtnPos();

bodyObj.addEventListener('mousemove', function(evt){
    var mouseX = evt.clientX;
    var mouseY = evt.clientY;
    console.log(mouseX + ':' + mouseY);
    btn.style.left = mouseX + 'px';
    btn.style.top = mouseY + 'px';
});


btnObj.addEventListener('click', myFunc);

function myFunc(){
    myArr.sort();
    
    for(var i = 0; i < myArr.length; i++){
        //printName(myArr[i], i);
        console.log(myArr[i].length);
    }
}

/*
function printName(aName, aIdx){
    var idx = aIdx + 1;
    switch(aIdx){
        case 0:
            listObj.innerHTML = '<li>' + aName + ' is the ' + idx + 'st in the array.</li>';
            break;
        case 1:
            listObj.innerHTML += '<li>' + aName + ' is the ' + idx + 'nd in the array.</li>';
            break;
        case 2:
            listObj.innerHTML += '<li>' + aName + ' is the ' + idx + 'rd in the array.</li>';
            break;
        default:
            listObj.innerHTML += '<li>' + aName + ' is the ' + idx + 'th in the array.</li>';
            break;
    }
}
*/
