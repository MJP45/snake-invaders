 export default class Snake {
  hp;
  damage;
  alive = true;

  constructor(hp, damage){
    this.hp = hp;
    this.damage = damage;
  }

  beenHit() {
    this.hp = (this.hp - this.damage);

    if (this.hp <= 0){
        this.hp = 0;
        this.alive = false;
    }
    // remove from array of selectable snakes 
  }
};