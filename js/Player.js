import {allEnemies} from "./app.js";
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
export default class Player{
  constructor(x, y){
  this.sprite = 'images/char-boy.png';
  this.x = x;
  this.y = y;
}

  update (){
    if (this.x < 0) this.x = 0;
    if (this.x > 400) this.x = 400;
    if (this.y > 380 || this.y < -10) this.y = 380;
    var c = this.collisions();
    if (c){
      this.x = 200;
      this.y = 380;
    }
  }

  render (){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput (d){
    console.log(d === 'up');
    if (d == 'up') this.y -= 80;
    if (d == 'down') this.y += 80;
    if (d == 'left') this.x -= 100;
    if (d == 'right') this.x += 100;
  }

   collisions(){
    for (var i = 0; i < allEnemies.length; i++){
      if (Math.abs(this.x - allEnemies[i].x) <= 60 && Math.abs(this.y - allEnemies[i].y) <= 40)
      return true;
    }
    return false;
  }
}
