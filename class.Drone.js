import {SnakeNest} from "./class.SnakeNest.js";

export class Drone extends SnakeNest {
  constructor(hp, damage){
    super();
    this.hp = hp;
    this.damage = damage;
  }
};