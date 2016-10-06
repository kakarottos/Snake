(function(window) {
    'use strict';

	function Snake(){
		this.x = 100;
		this.y = 200;
		this.moveDirection = 'DOWN'; 

		this.initLiseners();
	}
	Snake.prototype.initLiseners = function() {
		window.addEventListener('keydown', function(e){
		    if(e.keyCode == 38) {
		    	this.moveDirection = 'UP';
	    	}
		}.bind(this));
		window.addEventListener('keyup', function(e){
		    if(e.keyCode == 38) {
		    	this.moveDirection = 'DOWN';
	    	}
		}.bind(this));
	};
	Snake.prototype.moveDown = function(speed) {
		this.y += speed; 
	};
	Snake.prototype.moveUp = function(speed) {
		this.y -= speed; 
	};

    window.app = window.app || {};
    window.app.Snake = Snake;

}(window));