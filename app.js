import Queen from "./classes/queen.js";
import Drone from "./classes/drone.js";
import Worker from "./classes/worker.js";

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
let snakes;

// Methods
const makeSnakes = () => {
  const basilisk = new Queen(80, 80);
  const queen = [basilisk];
  
  const numWorkers = 5;
  let workers = [];
  for(let i = 0; i < numWorkers; i++){
      workers.push(new Worker(68,10)); 
  };
  
  const numDrones = 8;
  let drones = [];
  for(let i = 0; i < numDrones; i++){ 
      drones.push(new Drone(60,12));
  };
  
  snakes = queen.concat(workers, drones);
};

const killEveryone = () => {
  if (snakes[0].hp <= 0){
      snakes.forEach(snake => {
        snake.hp = 0;
      });
  };
};

// selecting a random element from the array of snakes to be attacked.
const attackSnakes = () => {
  const randomIndex = Math.floor(Math.random() * snakes.length);
  const target = snakes[randomIndex];
  target.beenHit();
  displayScores(snakes);
  const aliveSnakeArray = snakes.filter(snake => snake.alive === true);
  killEveryone();
  return aliveSnakeArray;
};

const displayScores = () => {
  console.log("i'm displaying a score")
  let htmlArray = [...document.querySelectorAll('.points')];
  for (let i in snakes) {
    htmlArray[i].innerHTML = snakes[i].hp;
  };
};



const startGame = () => {
  document.getElementById("startPage").style.display = "none";
  
}

// startgame 

makeSnakes();
document.getElementById("button").addEventListener("click", attackSnakes);
document.getElementById("startGame").addEventListener("click", startGame );





