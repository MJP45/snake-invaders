import {Queen} from "./class.Queen.js";
import {Drone} from "./class.Drone.js";
import {Worker} from "./class.Worker.js";

// go add hp to snakes and represent it globaly 
// link random action to a specific snake and mark that snake as hit showing a reduction in hp. 

// set a for loop for beenHit/check-queenDead/beenHit etc...
    // const playgame = () => {
    //   for (let i=0;i<5;i++){
    //       aFunction();
    //       anotherFunction();
    //   }
    // } 
    // playgame();


// Methods
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
const attackSnakes = () => {
  const randomIndex = Math.floor(Math.random() * snakes.length);
  const target = snakes[randomIndex];
  target.beenHit();
  displayScores(snakes.hp);
};

const displayScores = () => {
  console.log("i'm displaying a score")
let htmlArray = [...document.querySelectorAll('.points')];
    for (let i in snakes) {
      htmlArray[i].innerHTML = snakes[i].hp;
    };
  };

document.getElementById("button").addEventListener("click", attackSnakes);




