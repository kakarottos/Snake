(function(window) {
    'use strict';

	function Snake(){
		this.x = 250;
		this.y = 250;
		this.moveDirection =  app.consts.DOWN; 
		this.acceleration = 0;

		this.initLiseners();
	}
	Snake.prototype.initLiseners = function() {
		window.addEventListener('keydown', function(e){
		    if(e.keyCode == 38) {
		    	if(this.moveDirection !== app.consts.UP){
		    		this.moveDirection =  app.consts.UP;
		    	}
	    	}
		}.bind(this));
		window.addEventListener('keyup', function(e){
		    if(e.keyCode == 38) {
		    	if(this.moveDirection !== app.consts.DOWN){
		    		this.moveDirection =  app.consts.DOWN;
		    	}
	    	}
		}.bind(this));
	};
	Snake.prototype.move = function(speed) {
		this.y += speed + this.acceleration; 
	};
	Snake.prototype.accelerationUp = function(acceleration) {
		this.acceleration += acceleration;
	};
	Snake.prototype.accelerationDown = function(acceleration) {
		this.acceleration -= acceleration;
	};

    window.app = window.app || {};
    window.app.Snake = Snake;

}(window));