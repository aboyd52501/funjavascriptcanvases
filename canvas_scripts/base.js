// base script all other experiments build off of, ctx will be used to draw in the others.
var canvas = document.getElementById('paint');
var ctx = canvas.getContext('2d');

var time = 0;
var fps = 60;

var w // ctx width
var h // ctx height
var s // ctx minimum dimension ( used for squaring graphics )

// really only resizes the draw space
function resizeCanvas() {
	
	w = window.innerWidth;
	h = window.innerHeight;
	
	s = ( w > h ? h : w )
}

// resize on startup
resizeCanvas();
canvas.width = window.screen.width;
canvas.height = window.screen.height;

// resize on change
window.addEventListener( 'resize', resizeCanvas );

//second tracker
setInterval( function(){ time += 1/fps; }, 1000/fps );