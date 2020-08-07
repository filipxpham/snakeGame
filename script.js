let snake = new Snake();
let food;

function setup() {
	var canvas = createCanvas(600, 600);
	canvas.parent('stuff');

	frameRate(10);
	genereateFood();


}

function draw(){
	background(51);
	snake.update();
	snake.show();


	if(snake.eat(food)){
		genereateFood();	
	}

	snake.death(); 


	
	fill(255,0,155);
	rect(food.x, food.y, snake.scl, snake.scl);
	showScore();

}

function showScore(){
	fill(255,255,255);
	text("Score: " + snake.len, 2, 10);
}

function genereateFood(){
	let cols = height/snake.scl;
	let rows = width/snake.scl; 

	let randomCol = floor(random(floor(cols)));
	let randomRow = floor(random(floor(rows)));

	food = createVector(randomRow, randomCol);

	food.mult(snake.scl);
 
}  

function mousePressed(){
	snake.len = snake.len + 1;
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
		snake.changeDirection(1);
	}
	else if (keyCode === RIGHT_ARROW) {
    	snake.changeDirection(3);
  	}
  	else if (keyCode === UP_ARROW) {
    	snake.changeDirection(2);
  	}
  	else if (keyCode === DOWN_ARROW) {
    	snake.changeDirection(4);
  	}
}