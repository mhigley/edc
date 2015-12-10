/* js goes here */

/*
var socialMedia = {
	facebook: 'https://www.facebook.com/CSSTricks/',
	twitter: 'https://twitter.com/Real_CSS_Tricks',
	flickr: 'https://www.flickr.com/photos/zeldman/18658541431',
	youtube: 'https://www.youtube.com/user/realcsstricks'
	//instagram: 'https://www.instagram.com'
};
*/

var turtles = {
	leonardo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/LEONARDO.JPG/440px-LEONARDO.JPG',
	donatello: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Cinque_maestri_del_rinascimento_fiorentino%2C_XVI_sec%2C_donatello.JPG/440px-Cinque_maestri_del_rinascimento_fiorentino%2C_XVI_sec%2C_donatello.JPG',
	raphael: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Raffaello_Sanzio.jpg/440px-Raffaello_Sanzio.jpg',
	michaelangelo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Michelango_Portrait_by_Volterra.jpg/440px-Michelango_Portrait_by_Volterra.jpg',
	dali: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Salvador_Dal%C3%AD_1939.jpg/440px-Salvador_Dal%C3%AD_1939.jpg',
	vangogh: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/440px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg',
	okeefe: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/O%27Keeffe-%28hands%29.jpg/440px-O%27Keeffe-%28hands%29.jpg',
	rembrandt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg/440px-Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg',
	monet: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/440px-Claude_Monet_1899_Nadar_crop.jpg',
	renoir: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Pierre_Auguste_Renoir%2C_uncropped_image.jpg',
	vermeer: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Cropped_version_of_Jan_Vermeer_van_Delft_002.jpg/440px-Cropped_version_of_Jan_Vermeer_van_Delft_002.jpg'
}



var artists = function(){
	var output = '<ul>';
	var gallery = document.getElementsByClassName('gallery');
	for(var key in arguments[0]){
		output += '<li><img src="' + turtles[key] + '" alt="' + i + '"></li>';
	}
	output += '</ul>';

	for(var i = 0; i < gallery.length; i++){
		gallery[i].innerHTML = output;
	}

	document.querySelector('.gallery ul').addEventListener('click', function(evt){
		if(evt.target.tagName === 'IMG'){
			var previewDiv = document.createElement('div');
			previewDiv.className = 'preview';
			evt.target.parentElement.appendChild(previewDiv);

			var previewImg = document.createElement('img');
			previewImg.src = evt.target.src;

			previewDiv.appendChild(previewImg);

			evt.target.addEventListener('mouseout', function delPreview(e){
				var thePreview = e.target.parentElement.querySelector('.preview');
				previewDiv.parentElement.removeChild(thePreview);

				this.removeEventListener('mouseout', delPreview);
			});
		}

	});

}(turtles);


/*
var social = function(){
	var output = '<ul>';
	var smiList = document.getElementsByClassName('smi');
	for(var key in arguments[0]){
		output += '<li><a target="_blank" href="' + socialMedia[key] + '"><i class="fa fa-' + key + '"></i></a></li>';
	}
	output += '</ul>';

	for(var i = 0; i < smiList.length; i++){
		smiList[i].innerHTML = output;
	}
}(socialMedia);
*/




