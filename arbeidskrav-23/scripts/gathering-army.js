// IMPORTING MODULES
import ArmyModule from "./modules/ArmyModule.js";
import {
  updateResourceAmount,
  addArmyToInventory,
  resources,
} from "./utils/localStorage.js";
import { createCardElements } from "./utils/htmlDOMElements.js";
import { showResources } from "./utils/resource.js";

// HTML ELEMENTS
const armyShopContainer = document.querySelector(".army__shop");
const searchTerm = document.querySelector(".search__term");
const searchButton = document.querySelector(".search__btn");
// const amountOfGold = document.querySelector("#gold__amount");
// const amountOfIron = document.querySelector("#metal__amount");
// const amountOfWood = document.querySelector("#wood__amount");

// // Showing Amount Of Resources Collected
// amountOfGold.innerHTML = resources[0].amount;
// amountOfIron.innerHTML = resources[1].amount;
// amountOfWood.innerHTML = resources[2].amount;

showResources(resources);

//Merging both Modules into one Array
const warriors = ArmyModule.getWarriors;
const tools = ArmyModule.getTools;
const cards = [...warriors, ...tools];

//
const displayArmyShopCards = () => {
  let cardOutput = "";
  for (let card of cards) {
    cardOutput += createCardElements(card);
    armyShopContainer.innerHTML = cardOutput;
  }
};
displayArmyShopCards();

// SEARCH BAR FUNCTION
const searchFilter = (term) => {
  const filteredCard = cards.filter((card) => {
    return card.categoryName.toLowerCase() === term.toLowerCase();
  });

  let cardOutput = "";
  for (let card of filteredCard) {
    cardOutput += createCardElements(card);
    armyShopContainer.innerHTML = cardOutput;
  }
};

// EVENTS LISTNERS
searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  searchFilter(searchTerm.value);
  searchTerm.value = "";
});

[...document.querySelectorAll(".btn-buy")].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    updateResourceAmount("Gold", e.target.title, "DECREAMENT");
    addArmyToInventory(e.target.name);
    const updatedAmount = JSON.parse(localStorage.getItem("resources"));
    console.log(updatedAmount);
    // amountOfGold.innerHTML = updatedAmount[0].amount;
    // amountOfIron.innerHTML = updatedAmount[1].amount;
    // amountOfWood.innerHTML = updatedAmount[2].amount;
    showResources(updatedAmount);
  });
});
