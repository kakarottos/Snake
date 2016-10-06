(function(window) {
    'use strict';

	function Candy(){
		this.x = 500;
		this.y = Math.floor((Math.random() * 500) + 0);
	}
	Candy.prototype.move = function() {
		this.x -= 1; 
	};

    window.app = window.app || {};
    window.app.Candy = Candy;

}(window));