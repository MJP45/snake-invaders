import {SnakeNest} from "./class.SnakeNest.js";

export class Queen extends SnakeNest {  
  constructor(hp, damage){
    super();
    this.hp = hp;
    this.damage = damage;
  }

  // trigger this when queen hp = 0
  // outside the function 
    killEveryone(){
      if (this.hp <= 0){
          snakes.forEach(snake => {
            snake.hp = 0;
          });
      } 
    }
};