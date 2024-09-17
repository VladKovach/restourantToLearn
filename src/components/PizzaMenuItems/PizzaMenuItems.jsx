import React, { useState } from "react";
import {
  pizzasPrices32,
  pizzasPrices45,
  refreshPricesArr,
} from "../FakeItemsPrices/FakeItemsPrices";
import pizzaImg from "../../assets/images/foodImgs/pizzaForMenu.jpg";

const PizzaMenuItems = ({ pizzas, shwBascModPg, shwBasc, addItemFunk }) => {
  const [pizaWithDmPrice, setPizaWithDmPrice] = useState([...pizzasPrices32]);
  const allPizzasWithDescriptions = [...pizzas].map((piza, index) => {
    piza.name = "Some piza name" + (index + 1);
    piza.description =
      "Some piza description" +
      (index + 1) +
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ut nihil nemo rem. Molestiae, modi.";
    piza.price = pizaWithDmPrice[index];
    return (
      <div key={piza.id} className="pizaItemWithDescription">
        <img src={pizzaImg} className="item_img"></img>

        <h3>{piza.name}</h3>

        <p>{piza.description}</p>
        <div>Price: {piza.price}$</div>
        <select
          onClick={(e) => {
            const value = e.target.value;
            if (value == 45) {
              setPizaWithDmPrice(refreshPricesArr(pizaWithDmPrice, index, pizzasPrices45));
            }
            if (value == 32) {
              setPizaWithDmPrice(refreshPricesArr(pizaWithDmPrice, index, pizzasPrices32));
            }
          }}
        >
          <option value={32}>32cm</option>
          <option value={45}>45cm</option>
        </select>
        <div>
          <button
            onClick={() => {
              shwBascModPg(true);
              addItemFunk({
                id: piza.id,
                name: piza.name,
                price: piza.price,
                quantity: piza.quantity,
              });
            }}
            className="customButton buyPizzaBtn"
          >
            Buy
          </button>
          <button
            onClick={() => {
              shwBasc(true);
              addItemFunk({
                id: piza.id,
                name: piza.name,
                price: piza.price,
                quantity: piza.quantity,
              });
            }}
            className="customButton addPizzaBtn"
          >
            Add
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="mealsCardsItems">
      <div className="pizzaItemContainer">{allPizzasWithDescriptions}</div>
    </div>
  );
};

export default PizzaMenuItems;
