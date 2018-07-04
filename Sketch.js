var etop = 0, eleft = 0;
var ewidth = 60;
var eheight = 60;

var ntop = 2;
var nleft = 2;

var moveSpeed = 3;

function setup() {
	createCanvas(600, 400);
	background(0, 0, 0);

	etop = random(eheight/2, height);
	eleft = random(eleft/2, width);	
}

function draw() {
	if((etop + ntop + (ewidth / 2)) > width)
		ntop = moveSpeed * -1;
	else if((etop + ntop - (ewidth / 2)) < 0)
		ntop = moveSpeed;

	if((eleft + nleft + (eheight / 2)) > height)
		nleft = moveSpeed * -1;
	else if((eleft + nleft - (eheight / 2)) < 0)
		nleft = moveSpeed;

	etop += ntop;
	eleft += nleft;

	var temp = ewidth;
	ewidth = eheight;
	eheight = temp;

	stroke(0);
	
	fill(255, 255, 255);
	ellipse(etop, eleft, ewidth, eheight);
}
