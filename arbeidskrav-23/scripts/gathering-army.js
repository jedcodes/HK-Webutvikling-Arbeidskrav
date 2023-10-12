// IMPORTING MODULES
import ArmyModule from "./modules/ArmyModule.js";
import {
  updateResourceAmount,
  addArmyToInventory,
} from "./utils/localStorage.js";
import { createCardElements } from "./utils/htmlDOMElements.js";

// HTML ELEMENTS
const resourceSection = document.querySelector(".resources");
const warriorSection = document.querySelector(".warriors");
const searchTerm = document.querySelector(".search__term");
const searchButton = document.querySelector(".search__btn");

const displayWarriorCards = () => {
  const cards = ArmyModule.getWarriors;

  let cardOutput = "";
  for (let card of cards) {
    cardOutput += createCardElements(card);
    warriorSection.innerHTML = cardOutput;
  }
};
displayWarriorCards();

// SEARCH BAR FUNCTION
const searchFilter = (term) => {
  const cards = ArmyModule.getWarriors;

  const filteredCard = cards.filter((card) => {
    return card.categoryName.toLowerCase() === term.toLowerCase();
  });

  let cardOutput = "";
  for (let card of filteredCard) {
    cardOutput += createCardElements(card);
    warriorSection.innerHTML = cardOutput;
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
    console.log(e.target.title);
  });
});

// REMOVE LATER: TIMEOUT FUNCTION TO ADD GOLD COINS

setTimeout(() => {
  updateResourceAmount("Gold", 1000);
}, 5000);
