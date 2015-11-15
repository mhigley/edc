function currentPos(){
		if(window.scrollY) return window.scrollY;
		if(self.pageYOffset) return self.pageYOffset;
		if(document.body.scrollTop) return document.body.scrollTop;
		return 0;
	}

	function elPos(elID){
		var el = document.getElementById(elID);
		var y = el.offsetTop;
		var node = el;
		while(node.offsetParent && node.offsetParent != document.body){
			node += node.offsetParent;
			y += node.offsetTop;
		}
		return y;
	}

	function smoothScroll(elID){
		var startY = currentPos();
		var stopY = elPos(elID);
		var distance = stopY > startY ? stopY - startY : startY - stopY;
		if(distance < 100){
			scrollTo(0, stopY);
			return;
		}
		var speed = Math.round(distance / 100);
		if(speed >= 20) speed = 20;
		var step = Math.round(distance / 25);
		var leapY = stopY > startY ? startY + step : startY - step;
		var timer = 0;
		if(stopY > startY){
			for(var i = startY; i < stopY; i+=step){
				setTimeout('window.scrollTo(0, '+leapY+')', timer * speed);
				leapY += step;
				if(leapY > stopY) leapY = stopY;
				timer++;
			}
			return;
		}
		for(var i = startY; i > stopY; i-=step){
			setTimeout('window.scrollTo(0, '+leapY+')', timer * speed);
			leapY -= step;
			if(leapY < stopY) leapY = stopY;
			timer++;
		}
	}