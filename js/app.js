import Player from "./Player";
import Enemy from "./Enemy";
import Stone from "./Stone";
import Engine from "./engine";
// Enemies our player must avoid











/*var Stone = function(x, y){
  this.sprite = 'images/Gem Blue.png';
  this.x = x;
  this.y = y;

};*/


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [
  new Enemy(-100, 50, 250),
  new Enemy(-100, 50, 120),
  new Enemy(-100, 130, 200),
  new Enemy(-100, 210, 150)
]

var player = new Player(200, 380);


/*var stPs = new Stone(200, 100);*/

var stPs = [
new Stone(20, 115)
]


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
export {allEnemies};
export {stPs};
Engine(window, player);
