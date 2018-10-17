
var canvas = document.getElementById('paint');
var ctx = canvas.getContext('2d');

var fps = 60;
var time = 0;

var w
var h
var s

function drawCanvas() {
	
	time += 1/fps;
	
	var rx = Math.random()*w;
	var ry = Math.random()*h;
	
	var rw = (Math.random()*.8+.2)*s/3;
	var rh = (Math.random()*.8+.2)*s/3;
	
	ctx.fillStyle = 'hsl('+(time*30 % 360 + Math.random()* 3 )+',100%,50%)';
	ctx.fillRect( rx-rw/2, ry-rh/2, rw, rh );
	//ctx.fill();
	
}

function resizeCanvas() {
	
	w = window.innerWidth;
	h = window.innerHeight;
	
	s = ( w > h ? h : w )
}


// resize on startup
resizeCanvas();
canvas.width = window.screen.availWidth;
canvas.height = window.screen.availHeight;

// resize on change
window.addEventListener( 'resize', resizeCanvas );

// render
setInterval( drawCanvas, 1000/fps );