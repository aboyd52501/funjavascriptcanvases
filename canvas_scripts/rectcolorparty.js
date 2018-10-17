function drawCanvas() {
	
	var rx = Math.random()*w;
	var ry = Math.random()*h;
	
	var rw = (Math.random()*.8+.2)*s/3;
	var rh = (Math.random()*.8+.2)*s/3;
	
	ctx.fillStyle = 'hsl('+(time*30 % 360 + Math.random()* 3 )+',100%,50%)';
	ctx.fillRect( rx-rw/2, ry-rh/2, rw, rh );
	
}

// render
setInterval( drawCanvas, 1000/fps );
