(function() {
	'use strict';
    var app = window.app;

    function Game(){
    	this.ctx = this.initGameArena();

    	this.snake = new app.Snake();
    	this.candies = [];
    	this.shadows = [];
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
			this.ctx.clearRect(0, 0, canvas.height, canvas.width);

			this.renderCandies(i);

			if(this.shadows.length === (10 + this.points)){
				this.shadows.shift();
			}
			this.shadows.push(this.snake.y);

			this.shadows.reverse();
			this.shadows.forEach(function(y, index) {
				this.ctx.fillRect(this.snake.x - ((index + 1) * 6), y + 3, 5, 5);
			}.bind(this));
			this.shadows.reverse();

			this.ctx.fillRect(this.snake.x, this.snake.y, 10, 10);
			if(this.snake.moveDirection === 'DOWN'){
				this.snake.moveDown(2);
			} else {
				this.snake.moveUp(2);
			}

			i++;
			window.requestAnimationFrame(loop);
		}.bind(this);
		loop();
    };

    Game.prototype.renderCandies = function(i) {
    	if(i%100 === 0){
			this.candies.push(new app.Candy());
		}

		this.candies.forEach(function(candy, index) {
			this.ctx.fillRect(candy.x, candy.y, 5, 5);
			candy.move();
			if(candy.x < 0){
				this.candies.splice(index, 1);
			}
			if(
				this.snake.x <= (candy.x + 1) && this.snake.x >= (candy.x -1) &&
				this.snake.y <= (candy.y + 10) && this.snake.y >= (candy.y -10)
		    ){
				console.log('work', this.snake.x, candy.x);
				this.candies.splice(index, 1);
				this.points++;
			}
		}.bind(this));
    };

    var game = new Game();
    game.startGame();

}());