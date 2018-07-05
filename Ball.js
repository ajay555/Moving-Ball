function Ball(moveSpeed) {
	this.r = random(255);
	this.g = random(255);
	this.b = random(255);

	this.moveSpeed = int(random(1, 4));

	this.width = width / 20;
	this.height = this.width;

	this.top = random(this.height/2, height);
	this.left = random(this.width/2, width);

	this.directionX = (this.left < width / 2) ? 2 : -2;
	this.directionY = (this.top < height / 2) ? 2 : -2;
}

Ball.prototype.move = function() {
	if((this.top + this.directionY + (this.width / 2)) > width)
		this.directionY = this.moveSpeed * -1;
	else if((this.top + this.directionY - (this.width / 2)) < 0)
		this.directionY = this.moveSpeed;

	if((this.left + this.directionX + (this.height / 2)) > height)
		this.directionX = this.moveSpeed * -1;
	else if((this.left + this.directionX - (this.height / 2)) < 0)
		this.directionX = this.moveSpeed;

	this.top += this.directionY;
	this.left += this.directionX;

	stroke(0);
	fill(this.r, this.g, this.b);

	ellipse(this.top, this.left, this.width, this.height);
}