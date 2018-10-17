var boxSizeX = s/5;
var boxSizeY = s/5;

// velocities
var boxVelX = s/2;
var boxVelY = s/Math.E;

var boxPosX = w/2;
var boxPosY = h/2;

ctx.fillStyle = 'black';
ctx.fillRect(0,0,w,h);

function drawCanvas() {
	
	ctx.fillStyle = 'hsl('+(time*40 % 360 )+',100%,50%)';
	ctx.fillRect( boxPosX-boxSizeX/2, boxPosY-boxSizeY/2, boxSizeX, boxSizeY );
	
	boxPosX += boxVelX/fps;
	boxPosY += boxVelY/fps;
	
	if( boxPosX + boxSizeX/2 >= w ) {
		boxVelX *= -1;
	} else if ( boxPosX - boxSizeX/2 <= 0 ) {
		boxVelX *= -1;
	}
	
	if( boxPosY + boxSizeY/2 >= h ) {
		boxVelY *= -1;
	} else if ( boxPosY - boxSizeY/2 <= 0 ) {
		boxVelY *= -1;
	}
	
}

// render
setInterval( drawCanvas, 1000/fps );
