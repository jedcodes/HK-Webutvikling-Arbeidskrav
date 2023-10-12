const createCardElements = (data) => {
  return `
    <div class="card" style="width: 18rem;">
  <img src=${data.image} class="card-img-top" alt=${data.categoryName}>
  <div class="card-body">
    <h2 class="card-title">${data.categoryName}</h2>
    <h5>${data.priceGold}</h5>
    <a href="#" name=${data.categoryName} title=${data.priceGold} class="btn btn-primary btn-buy">Buy</a>
  </div>
</div>
`;
};

// YOUR ARMY PAGE CARD
const inventoryCardElements = (data) => {
  return `
        <div class="card" style="width: 15rem">
            <img class="card__img" src=${data.image} alt=${data.categoryName}/>
        </div>
    
    `;
};

export { createCardElements, inventoryCardElements };
