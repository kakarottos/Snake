(function(window) {
    'use strict';

	function Candy(){
		this.x = app.consts.GAME_WIDTH;
		this.y = Math.floor((Math.random() * app.consts.GAME_WIDTH) + 0);
	}
	Candy.prototype.move = function() {
		this.x -= 1; 
	};

    window.app = window.app || {};
    window.app.Candy = Candy;

}(window));