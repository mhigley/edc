/* put your javascript here */

/*var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.520618, lng: -73.552457},
    scrollwheel: false,
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });
}*/

//$big: giraffe;

var $sizers = document.getElementsByTagName('button');
var $size = document.getElementsByTagName('body')[0];
var $default = '100%';

for(var $i = 0; $i < $sizers.length; $i++){
	$size.style.fontSize = $default;
	$sizers[$i].addEventListener('click', function(){
		// write stuff
		var $getBtn = this.innerHTML;
		if($getBtn == ' + '){
			console.log(Number($default) + 10);
			//$newdefault = $default + '10%';
			//$size.style.fontSize = $newdefault;
		}else{
			//$newdefault = $default - '10%';
			//$size.style.fontSize = $newdefault;
		}
	});
}




