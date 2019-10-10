 
export class SnakeNest {
  hp;
  damage;
  beenHit() {
    this.hp = (this.hp - this.damage);
  }
};