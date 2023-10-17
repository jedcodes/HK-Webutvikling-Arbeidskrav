const amountOfGold = document.querySelector("#gold__amount");
const amountOfIron = document.querySelector("#metal__amount");
const amountOfWood = document.querySelector("#wood__amount");
// Showing Amount Of Resources Collected

export const showResources = (resourceArray) => {
  amountOfGold.innerHTML = resourceArray[0].amount;
  amountOfIron.innerHTML = resourceArray[1].amount;
  amountOfWood.innerHTML = resourceArray[2].amount;
};
