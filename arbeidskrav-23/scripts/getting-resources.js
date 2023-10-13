import { resources, updateResourceAmount } from "./utils/localStorage.js";

const mineImage = document.querySelector(".mine");
const woodImage = document.querySelector(".woodcutting");
const amountOfGold = document.querySelector("#gold__amount");
const amountOfIron = document.querySelector("#metal__amount");
const amountOfWood = document.querySelector("#wood__amount");

// Showing Amount Of Resources Collected
amountOfGold.innerHTML = resources[0].amount;
amountOfIron.innerHTML = resources[1].amount;
amountOfWood.innerHTML = resources[2].amount;
// ---------------- Mining --------------- //

//Function to mine resources from mine
const mineResources = () => {
  const probability = Math.random();

  if (probability <= 0.75) {
    //75% chance of getting iron resource
    const ironAmount = Math.floor(Math.random() * 30) + 1; //Random amount of iron between 1 and 30
    updateResourceAmount("Metal", ironAmount);
    amountOfIron.innerHTML = resources[1].amount;
  } else {
    //25% chance to get 20 gold coins
    const goldCoins = 20;
    updateResourceAmount("Gold", goldCoins);
    amountOfGold.innerHTML = resources[0].amount;
  }
};

// ---------------- Woodcutting ------------ //

//Function for woodcutting
const cutWood = () => {
  const woodAmount = Math.floor(Math.random() * 30) + 1; //Random amount of wood between 1 and 30
  updateResourceAmount("Wood", woodAmount);
  amountOfWood.innerHTML = resources[2].amount;
};

// -------- Event listeners: onClick ------ //
mineImage.addEventListener("click", mineResources);
woodImage.addEventListener("click", cutWood);
