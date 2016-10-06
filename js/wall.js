(function(window) {
    'use strict';

    function Wall(){

		this.height = Math.random() * (250 - 100) + 100;
		this.width = Math.floor((Math.random() * 50) + 1),
		this.x = canvas.width;
		this.y = 0;
	}
	Wall.prototype.move = function() {
		this.x -= 1;
	};

    window.app = window.app || {};
    window.app.Wall = Wall;

}(window));