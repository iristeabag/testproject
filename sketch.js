function setup()
{
	var c = document.getElementsByTagName("canvas")[0];
	c.width = 500;
	c.height = 500;
	var ctx = c.getContext("2d");

	// Create gradient
	// var grd = ctx.createRadialGradient(75,50,5,90,60,100);
	// grd.addColorStop(0,"red");
	// grd.addColorStop(1,"white");

	// Fill with gradient
	ctx.fillStyle = "#000000";
	ctx.fillRect(0,0,c.width,c.height);

	s = new snake();
	// frameRate(10);
	// pickLocation();
}