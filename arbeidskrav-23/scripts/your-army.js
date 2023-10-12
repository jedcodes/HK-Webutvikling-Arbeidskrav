import { resources, inventory } from "./utils/localStorage.js";
import { inventoryCardElements } from "./utils/htmlDOMElements.js";

const inventoryWrapper = document.querySelector(".inventory__wrapper");

const displayInventoryCards = () => {
  let ouput = "";
  console.log(inventory);
  for (let card of inventory) {
    ouput += inventoryCardElements(card);
    inventoryWrapper.innerHTML = ouput;
  }
};

displayInventoryCards();
