const ArmyModule = (() => {
  const warriors = [
    {
      categoryName: "Snake",
      priceGold: 200,
      image: "/arbeidskrav-23/images/warrior-1.jpg",
    },
    {
      categoryName: "Giant",
      priceGold: 500,
      image: "/arbeidskrav-23/images/warrior-2.jpg",
    },
    {
      categoryName: "Big Axe",
      priceGold: 150,
      image: "/arbeidskrav-23/images/warrior-3.jpg",
    },
    {
      categoryName: "Thief",
      priceGold: 50,
      image: "/arbeidskrav-23/images/warrior-4.jpg",
    },
    {
      categoryName: "Tank",
      priceGold: 250,
      image: "/arbeidskrav-23/images/warrior-5.jpg",
    },
    {
      categoryName: "Berserker",
      priceGold: 275,
      image: "/arbeidskrav-23/images/warrior-6.jpg",
    },
  ];

  const tools = [
    {
      categoryName: "Cannon",
      priceGold: 100,
      image: "/arbeidskrav-23/images/cannon.png",
    },
    {
      categoryName: "Catapult",
      priceGold: 200,
      image: "/arbeidskrav-23/images/catapult.png",
    },
    {
      categoryName: "Elehant",
      priceGold: 275,
      image: "/arbeidskrav-23/images/elephant.png",
    },
    {
      categoryName: "Horse",
      priceGold: 75,
      image: "/arbeidskrav-23/images/horse.png",
    },
  ];

  // SPREAD OPERATOR TO MAKE COPY OF WARRIORS NAD TOOLS ARRAY
  const getWarriors = [...warriors];
  const getTools = [...tools];

  return { getWarriors, getTools };
})();

export default ArmyModule;
