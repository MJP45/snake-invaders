
const button = document.getElementById("button").addEventListener("click", attackSnakes);
onclick = target.beenHit;


// go add hp to snakes and represent it globaly 
// link random action to a specific snake and mark that snake as hit showing a reduction in hp. 


// Classes

// Snake 
// take damage
// not touchable when dead 
class Snake {
  hp;
  damage;

  beenHit() {
    this.hp = (this.hp - this.damage);
  }
}

// Button
// randomly selects a snake each time pressed
// inflicts dammage concurrent with individual snake damage parameters 

// Queen
// when hp = 0 all wasps dead

class Queen extends Snake {  
  constructor(hp, damage){
    super();
    this.hp = hp;
    this.damage = damage;
  }

  queenDead(){
    if (this.hp <= 0){
        Snake.hp = 0;
    } else {
      return this.hp;
    }
  }
}
// set a for loop for beenHit/check-queenDead/beenHit etc...
    // const playgame = () => {
    //   for (let i=0;i<5;i++){
    //       aFunction();
    //       anotherFunction();
    //   }
    // } 

    // playgame();

const basilisk = new Queen(80, 7);
const queen = [basilisk];

// basilisk.queenDead();
// basilisk.beenHit();
console.log(basilisk.hp);

// Worker
// hp = 68
// damage = -10
class Worker extends Snake { 
  constructor(hp, damage){
    super();
    this.hp = hp;
    this.damage = damage;
  }
}

const worker1 = new Worker(68, 10);
const worker2 = new Worker(68, 10);
const worker3 = new Worker(68, 10);
const worker4 = new Worker(68, 10);
const worker5 = new Worker(68, 10);
const workers = [worker1, worker2, worker3, worker4, worker5];
// worker1.beenHit();
console.log(worker1.hp);

// Drone
// hp = 60
// damage = -12
class Drone extends Snake {
  constructor(hp, damage){
    super();
    this.hp = hp;
    this.damage = damage;
  }
}
const drone1 = new Drone(60, 12);
const drone2 = new Drone(60, 12);
const drone3 = new Drone(60, 12);
const drone4 = new Drone(60, 12);
const drone5 = new Drone(60, 12);
const drone6 = new Drone(60, 12);
const drone7 = new Drone(60, 12);
const drone8 = new Drone(60, 12);
const drones = [drone1, drone2, drone3, drone4, drone5, drone6, drone7, drone8];
// drone1.beenHit()
console.log(drone1.hp);

// Make an array of 1 queen, 5 workers and 8 drones, and log it to the console.
const snakes = queen.concat(workers, drones);
console.log(snakes);

// selecting a random element from the array of snakes.
const target = snakes[Math.floor(Math.random() * snakes.length)];
target.beenHit();

console.log(target);

