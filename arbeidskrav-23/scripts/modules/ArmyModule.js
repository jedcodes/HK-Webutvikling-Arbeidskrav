const ArmyModule = (() => {
  const warriors = [
    {
      categoryName: "Snake",
      priceGold: 200,
      image: "./../images/warrior-1.jpg",
    },
    {
      categoryName: "Giant",
      priceGold: 500,
      image: "../../images/warrior-2.jpg",
    },
    {
      categoryName: "Big Axe",
      priceGold: 150,
      image: "../../images/warrior-3.jpg",
    },
    {
      categoryName: "Thief",
      priceGold: 50,
      image: "../../images/warrior-4.jpg",
    },
    {
      categoryName: "Tank",
      priceGold: 250,
      image: "../../images/warrior-5.jpg",
    },
    {
      categoryName: "Berserker",
      priceGold: 275,
      image: "../../images/warrior-6.jpg",
    },
  ];

  const tools = [
    {
      categoryName: "Cannon",
      priceGold: 100,
      image: "../../images/cannon.png",
    },
    {
      categoryName: "Catapult",
      priceGold: 200,
      image: "../images/catapult.png",
    },
    {
      categoryName: "Elehant",
      priceGold: 275,
      image: "../images/elehant.png",
    },
    {
      categoryName: "Horse",
      priceGold: 75,
      image: "../images/horse.png",
    },
  ];

  // SPREAD OPERATOR TO MAKE COPY OF WARRIORS NAD TOOLS ARRAY
  const getWarriors = [...warriors];
  const getTools = [...tools];

  return { getWarriors, getTools };
})();

export default ArmyModule;
