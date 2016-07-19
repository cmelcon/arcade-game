// Enemies our player must avoid
class Enemy{
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    constructor (x, y, speed){
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
  };
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update (dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        this.x += this.speed*dt;
        if (this.x >= 500){
          this.x = -100;
          this.speed = (Math.random()* 100) + 200;
        };
    };
    // Draw the enemy on the screen, required method for game
    render () {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

};



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player{
  constructor(x, y){
  this.sprite = 'images/char-boy.png';
  this.x = x;
  this.y = y;
};

  update (){
    if (this.x < 0) this.x = 0;
    if (this.x > 400) this.x = 400;
    if (this.y > 380 || this.y < -10) this.y = 380;

    if (collisions()){
      player.x = 200;
      player.y = 380;
    }
  }

  render (){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput (d){
    if (d == 'up') this.y -= 80;
    if (d == 'down') this.y += 80;
    if (d == 'left') this.x -= 100;
    if (d == 'right') this.x += 100;
  }
}


function collisions(){
  for (var i = 0; i < allEnemies.length; i++){
    if (Math.abs(player.x - allEnemies[i].x) <= 60 && Math.abs(player.y - allEnemies[i].y) <= 40);
    return true;
  }
  return false;
};




/*var Stone = function(x, y){
  this.sprite = 'images/Gem Blue.png';
  this.x = x;
  this.y = y;

};*/
class Stone{
  constructor(x, y){
    this.sprite = 'images/Gem Blue.png';
    this.x = x;
    this.y = y;
  };

  update(){

  };

  render () {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y, 60, 80);
  };
};


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
