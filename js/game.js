(function(window) {
	'use strict';
    var app = window.app;

    function Game(){
    	this.ctx = this.initGameArena();

    	this.snake = new app.Snake();
    	this.candies = [];
    	this.tails = [];
    	this.points = 0;
    };

    Game.prototype.initGameArena = function() {
    	var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d");
		return ctx;
    };
    Game.prototype.startGame = function() {
    	var i = 0;
		var loop = function(){
			this.ctx.clearRect(0, 0, app.consts.GAME_WIDTH, app.consts.GAME_HEIGHT);

			this.renderCandies(i);
			this.renderTail();
			this.renderSnake();

			i++;
			if(i > 100 ) i = 1;
			window.requestAnimationFrame(loop);
		}.bind(this);
		loop();
    };

    Game.prototype.renderCandies = function(i) {
    	if(i%100 === 0){
			this.candies.push(new app.Candy());
		}

		this.candies.forEach(function(candy, index) {
			this.ctx.fillRect(candy.x, candy.y, app.consts.CANDY_HEIGHT, app.consts.CANDY_WIDTH);
			candy.move();
			if(candy.x < 0){
				this.candies.splice(index, 1);
			}
			if(
				this.snake.x <= (candy.x + 1) && this.snake.x >= (candy.x -1) &&
				this.snake.y <= (candy.y + 10) && this.snake.y >= (candy.y -10)
		    ){
				this.candies.splice(index, 1);
				this.points++;
			}
		}.bind(this));
    };

	Game.prototype.renderTail = function() {
		if(this.tails.length === (20 + this.points)){
			this.tails.shift();
		}
		this.tails.push(this.snake.y);

		this.tails.reverse();
		this.tails.forEach(function(y, index) {
			this.ctx.fillRect(this.snake.x - ((index + 1) * 3), y + 3, app.consts.SNAKE_TAIL_HEIGHT, app.consts.SNAKE_TAIL_WIDTH);
		}.bind(this));
		this.tails.reverse();
	};

	Game.prototype.renderSnake = function() {
		this.ctx.fillRect(this.snake.x, this.snake.y, app.consts.SNAKE_HEAD_HEIGHT, app.consts.SNAKE_HEAD_WIDTH);
		if(this.snake.moveDirection === app.consts.DOWN){
			this.snake.move();
		} else {
			this.snake.move();
		}
		
	};

    new Game().startGame();

}(window));