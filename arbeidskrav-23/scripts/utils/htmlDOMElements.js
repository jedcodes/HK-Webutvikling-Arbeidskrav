//Creating Card DOM Elements
const createCardElements = (data) => {
  return `
      <article class="border text-center shadow-xl p-5">
        <h1>${data.categoryName}</h1>
        <img style="height: 15rem;" src="${data.image}" alt=${data.categoryName} />
        <a href="#" name=${data.categoryName} title=${data.priceGold} class="btn btn-success btn-buy">Buy<span>${data.priceGold}</span> 
        <img class="btn__buy-img" src="/arbeidskrav-23/images/gold-coin.png"/>
        </a>
      </article>
  `;
};

const inventoryCardElements = (data) => {
  return `
        <div class="card card__inventory" style="width: 15rem">
            <img class="card__img" src=${data.image} alt=${data.categoryName} />
        </div>
    `;
};

const renderMessage = () => {
  return `
    <article class="render__message">
      <h1>Your Inventory Is Currently Emtpy</h1>
      <img src="/arbeidskrav-23/images/messageImg.svg"/>
    </article>
  `;
};

export { createCardElements, inventoryCardElements, renderMessage };
