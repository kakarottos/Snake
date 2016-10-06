(function(window) {
    'use strict';

    var consts = {
    	GAME_WIDTH: 500,
    	GAME_HEIGHT: 300,
    	DOWN: 'DOWN',
    	UP: 'UP',
    	CANDY_HEIGHT: 5,
    	CANDY_WIDTH: 5,
    	SNAKE_HEAD_HEIGHT: 10,
    	SNAKE_HEAD_WIDTH: 10,
    	SNAKE_TAIL_HEIGHT: 3,
    	SNAKE_TAIL_WIDTH: 3
    }

    window.app = window.app || {};
    window.app.consts = consts;

}(window));