function Snake(){
	this.x = 20;
	this.y = 20;
	this.dir = 3;
	this.scl = 20; 
	this.len = 0; 
	this.tail = [];

	this.update = function(){
		for(var i = 0; i < this.tail.length - 1; i++){
			this.tail[i] = this.tail[i + 1];
		}

		if(this.len >= 1){
			this.tail[this.len - 1] = createVector(this.x, this.y);
		}
	}

	this.eat = function(food){
		let distance = dist(this.x, this.y, food.x, food.y);
		if(distance < 1){
			this.len = this.len+1;
			return true;
		}else{
			return false;
		}
	}

	this.death = function(){
		for(var i = 0; i < this.tail.length; i++){
			let pos = this.tail[i];
			let distance = dist(this.x, this.y, pos.x, pos.y);
			if(distance < 1){
				let score = this.len;
				this.tail = [];
				this.len = 0;
				this.x = 20; 
				this.y = 20;
				alert("Game over! Your Score: " + score);
			}
		}
	}


	this.changeDirection = function(dir){
		if(this.len != 0){
			if(dir == 1 && this.dir != 3
			|| dir == 2 && this.dir != 4
			|| dir == 3 && this.dir != 1
			|| dir == 4 && this.dir != 2){
			this.dir = dir;
			}
		}else{
			this.dir = dir;
		}
		
		
	}

	this.show = function(){

		fill(255,255,255);





		if(this.dir == 1){
			this.x = this.x - 1 * this.scl;
		}else if(this.dir == 2){
			this.y = this.y - 1 * this.scl;
		}else if(this.dir == 3){
			this.x = this.x + 1 * this.scl;
		}else if(this.dir == 4){
			this.y = this.y + 1 * this.scl;
		}

		

		for(let i = 0; i < this.tail.length; i++){
			rect(this.tail[i].x, this.tail[i].y, this.scl, this.scl);
		}

		rect(this.x,this.y,this.scl,this.scl);

		if(this.x < 0){
			this.x = width;
		}else if(this.x == width){
			this.x = 0;
		}else if(this.y < 0){
			this.y = height;
		}else if(this.y == height){
			this.y = 0;
		}
	}
}