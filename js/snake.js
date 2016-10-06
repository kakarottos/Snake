(function(window) {
    'use strict';

	function Snake(){
		this.x = app.consts.GAME_WIDTH/2;
		this.y = app.consts.GAME_HEIGHT/2;
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
	Snake.prototype.move = function() {
		this.y += this.acceleration; 
		this._changeAcceleration();
	};
	Snake.prototype._changeAcceleration = function() {
		if(this.moveDirection !== app.consts.UP){
			this.acceleration += 0.1;
		} else {
			this.acceleration -= 0.1;
		}
	};

    window.app = window.app || {};
    window.app.Snake = Snake;

}(window));