export default class Stone{
  constructor(x, y){
    this.sprite = 'images/Gem Blue.png';
    this.x = x;
    this.y = y;
  }

  update(){

  };

  render () {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y, 60, 80);
  };
};
