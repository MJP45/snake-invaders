// go add hp to snakes and represent it globaly 
// link random action to a specific snake and mark that snake as hit showing a reduction in hp. 

// Classes
// Snake 
class Snake {
  hp;
  damage;
  beenHit() {
    this.hp = (this.hp - this.damage);
  }
};

// Queen
// when hp = 0 all wasps dead
class Queen extends Snake {  
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
}
// set a for loop for beenHit/check-queenDead/beenHit etc...
    // const playgame = () => {
    //   for (let i=0;i<5;i++){
    //       aFunction();
    //       anotherFunction();
    //   }
    // } 

    // playgame();

// Worker
class Worker extends Snake { 
  constructor(hp, damage){
    super();
    this.hp = hp;
    this.damage = damage;
  }
}

// Drone
class Drone extends Snake {
  constructor(hp, damage){
    super();
    this.hp = hp;
    this.damage = damage;
  }
};

const basilisk = new Queen(80, 7);
const queen = [basilisk];
// basilisk.queenDead();

const numWorkers = 5;
let workers = [];
for(let i = 0; i < numWorkers; i++){
    workers.push(new Worker(68,10)); 
};
console.log(workers[0].hp);

const numDrones = 8;
let drones = [];
for(let i = 0; i < numDrones; i++){ 
    drones.push(new Drone(60,12));
};

const snakes = queen.concat(workers, drones);
console.log(snakes);
// selecting a random element from the array of snakes to be attacked.
attackSnakes = () => {
  const randomIndex = Math.floor(Math.random() * snakes.length);
  const target = snakes[randomIndex];
  target.beenHit();
  // hitDomElement(randomIndex);
  displayScores(snakes.hp);
};

// access snake elements in the dom 
// hitDomElement = (randomIndex) => {
//   let elements = [...document.getElementsByTagName("div")];
//   elements[randomIndex].innerHTML = "HIT";
// };

//give snake elements hp im the dom
//make function to do this


displayScores = () => {
  console.log("i'm displaying a score")
let htmlArray = [...document.querySelectorAll('.points')];
    for (i in snakes) {
      htmlArray[i].innerHTML = snakes[i].hp;
    };
  };





document.getElementById("button").addEventListener("click", attackSnakes);




