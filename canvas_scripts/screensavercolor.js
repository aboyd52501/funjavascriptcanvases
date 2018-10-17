var boxSizeX = s/9;
var boxSizeY = s/9;

// velocities
var boxVelX = s/2;
var boxVelY = s/2.435232634634;

var boxPosX = w/2;
var boxPosY = h/2;

ctx.fillStyle = 'black';
ctx.fillRect(0,0,w,h);

function drawCanvas() {
	
	ctx.fillStyle = 'hsl('+(time*100 % 360 )+',100%,'+(Math.sin(time/5)*20+50)+'%)';
	interpSteps = 5;
	for( var i = 0; i<interpSteps; i++ ) {
		ctx.fillRect( boxVelX/fps*(i/interpSteps)+boxPosX-boxSizeX/2, boxVelY/fps*(i/interpSteps)+boxPosY-boxSizeY/2, boxSizeX, boxSizeY );
	}
	
	boxPosX += boxVelX/fps;
	boxPosY += boxVelY/fps;
	
	// Bounce off walls
	// X
	if( boxPosX + boxSizeX/2 >= w ) {
		boxVelX *= -1;
	} else if ( boxPosX - boxSizeX/2 <= 0 ) {
		boxVelX *= -1;
	}
	// Y
	if( boxPosY + boxSizeY/2 >= h ) {
		boxVelY *= -1;
	} else if ( boxPosY - boxSizeY/2 <= 0 ) {
		boxVelY *= -1;
	}
	
}

// render
setInterval( drawCanvas, 1000/fps );
