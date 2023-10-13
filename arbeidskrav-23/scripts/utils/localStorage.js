// IMPORTING MODULES
import ResourcesModule from "../modules/ResourcesModule.js";
import ArmyModule from "../modules/ArmyModule.js";

// MERGING TOOLS AND WARRIORS ARRAY INTO ONE ARRAY
const tools = ArmyModule.getTools;
const warriors = ArmyModule.getWarriors;
const armyInventory = [...warriors, ...tools];

// LOCAL STORAGE SETTER FUNCTION
const setArmyInventory = () => {
  const resources = ResourcesModule.getResources();
  if (!localStorage.getItem("resources")) {
    localStorage.setItem("inventory", "[]");
    localStorage.setItem("resources", JSON.stringify(resources));
  }
};
setArmyInventory();

// STORING LOCAL STORAGE ITEMS
const resources = JSON.parse(localStorage.getItem("resources"));
const inventory = JSON.parse(localStorage.getItem("inventory"));

// ADD TO ARMY INVENTORY
const addArmyToInventory = (itemTitle) => {
  const inventoryItem = armyInventory.find(
    (item) => item.categoryName === itemTitle
  );

  inventory.push(inventoryItem);
  localStorage.setItem("inventory", JSON.stringify(inventory));
};

// UPDATE RESOURCE AMOUNT
const updateResourceAmount = (resourceType, amount, action = "ICREAMENT") => {
  const resource = resources.find(
    (resource) => resource.resourceType === resourceType
  );

  switch (action) {
    case "ICREAMENT":
      resource.amount += amount;
      break;
    case "DECREAMENT":
      if (resource.amount - amount >= 0) {
        resource.amount -= amount;
      } else alert("You have negativ balance");
      break;
    default:
      console.log("Invalid Action, try again!");
  }
  // Overwrite and update local storage with new value
  localStorage.setItem("resources", JSON.stringify(resources));
};

// EXPORTING FUNCTIONS AND VARIABLES
export { resources, inventory, updateResourceAmount, addArmyToInventory };
