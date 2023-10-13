import { resources, inventory } from "./utils/localStorage.js";
import {
  inventoryCardElements,
  renderMessage,
} from "./utils/htmlDOMElements.js";

const inventoryWrapper = document.querySelector(".inventory__wrapper");

const displayInventoryCards = () => {
  let output = "";
  if (inventory.length > 0) {
    for (let card of inventory) {
      output += inventoryCardElements(card);
      inventoryWrapper.innerHTML = output;
    }
  } else {
    output += renderMessage();
    inventoryWrapper.innerHTML = output;
  }
};

displayInventoryCards();
