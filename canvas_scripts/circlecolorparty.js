var boxSizeX = s/9;
var boxSizeY = s/9;

var circNum = 15;
var circPosRad = s/4;
var circRad = s/45


ctx.fillStyle = 'black';
ctx.fillRect(0,0,w,h);

// lerp from a to b
function lerp( value, a, b ) {
	
	// skip everything if they are the same
	if( a == b ) { return a; }
	
	return ( value*(b-a)+a );
	
}

function rectPath( frac ) {
	
	frac %= 1;
	
	var pos = {x:0,y:0};
	var val = frac*4 % 1
	
	if( frac < 0.25 ) {
		pos.x = lerp(val,w/3,w*2/3);
		pos.y = h/3;
	} else if ( frac < 0.5 ) {
		pos.x = w*2/3;
		pos.y = lerp(val,h/3,h*2/3);
	} else if ( frac < 0.75 ) {
		pos.x = lerp(val,w*2/3,w/3);
		pos.y = h*2/3;
	} else {
		pos.x = w/3;
		pos.y = lerp(val,h*2/3,h/3);
	}
	
	return pos;
	
}

function path( frac ) {
	
	frac %= 1;
	frac *= Math.PI*2;
	
	return {x:w/2+Math.sin(frac)*s/9,y:h/2+Math.cos(frac)*s/9};
	
}

function drawCanvas() {
	
	var pathPos = path(time/6);
	
	for( var i=0; i<circNum; i++ ) {
	
		/*
		ctx.globalAlpha = 0.005;
		ctx.fillStyle = 'hsl('+time*35%360+',100%,50%)';
		ctx.fillRect(0,0,w,h);
		ctx.globalAlpha = 1;
		*/
		
		var ang = Math.PI*2/circNum * i + time;
		var rad = circPosRad + Math.sin(i/circNum * 5 + time*3.4684)*s/6;
		var x = pathPos.x + Math.sin(ang)*rad;
		var y = pathPos.y + Math.cos(ang)*rad;
		
		ctx.beginPath();
		ctx.arc(x,y,circRad,0,2*Math.PI,false);
		ctx.closePath();
		
		ctx.fillStyle = 'hsl('+(time*20 + i/circNum * 60 % 360)+',100%,50%)';
		ctx.fill();
		
	}
}

// render
setInterval( drawCanvas, 1000/fps );
