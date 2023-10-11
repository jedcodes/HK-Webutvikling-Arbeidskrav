const ResourcesModule = (() => {
  const resources = [
    {
      resourceType: "Gold",
      amount: 0,
      image: "../../images/gold-coin.png",
    },
    {
      resourceType: "Metal",
      amount: 0,
      image: "../../images/metal.png",
    },
    {
      resourceType: "Wood",
      amount: 0,
      image: "../../images/wood.png",
    },
  ];

  const getResources = () => structuredClone(resources);

  return { getResources };
})();

export default ResourcesModule;
