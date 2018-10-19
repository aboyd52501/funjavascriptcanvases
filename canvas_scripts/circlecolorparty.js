var boxSizeX = s/9;
var boxSizeY = s/9;

var circNum = 15;
var circPosRad = s/4;
var circRad = s/45


ctx.fillStyle = 'black';
ctx.fillRect(0,0,w,h);

function drawCanvas() {
	for( var i=0; i<circNum; i++ ) {
	
		/*
		ctx.globalAlpha = 0.005;
		ctx.fillStyle = 'hsl('+time*35%360+',100%,50%)';
		ctx.fillRect(0,0,w,h);
		ctx.globalAlpha = 1;
		*/
		
		var ang = Math.PI*2/circNum * i + time;
		var rad = circPosRad + Math.sin(ang+time*3.4684)*s/6;
		var x = w/2 + Math.sin(ang)*rad;
		var y = h/2 + Math.cos(ang)*rad;
		
		ctx.beginPath();
		ctx.arc(x,y,circRad,0,2*Math.PI,false);
		ctx.closePath();
		
		ctx.fillStyle = 'hsl('+(time*20 % 360)+',100%,50%)';
		ctx.fill();
		
	}
}

// render
setInterval( drawCanvas, 1000/fps );
