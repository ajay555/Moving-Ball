var noOfBalls = 8;
var balls = [];

function setup() {
	createCanvas(600, 400);
	background(0, 0, 0);

	for(var i=0; i<noOfBalls; i++)
		balls[i] = new Ball();
}

function draw() {
	background(0, 0, 0);

	for(var i=0; i<noOfBalls; i++)
		balls[i].move();
}
