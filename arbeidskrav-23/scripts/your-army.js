import { resources, inventory } from "./utils/localStorage.js";
import {
  inventoryCardElements,
  renderMessage,
} from "./utils/htmlDOMElements.js";
import { showResources } from "./utils/resource.js";

const inventoryWrapper = document.querySelector(".inventory__wrapper");

showResources(resources);

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
