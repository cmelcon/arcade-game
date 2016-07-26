export default class Enemy{
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    constructor (x, y, speed){
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
  }
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
