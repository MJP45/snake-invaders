import {SnakeNest} from "./class.SnakeNest.js";

export class Worker extends SnakeNest { 
  constructor(hp, damage){
    super();
    this.hp = hp;
    this.damage = damage;
  }
};