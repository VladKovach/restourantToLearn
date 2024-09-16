import React from "react";
import "./pizzaPage.css";
import PizzaIngridientsToAdd from "../PizzaIngridientsToAdd/PizzaIngridientsToAdd";
import { pizzasItems, ingridItems } from "../FakeItemsPrices/FakeItemsPrices";
import { BrowserRouter, Route } from "react-router-dom";
import PizzaMenuItems from "../PizzaMenuItems/PizzaMenuItems";

const PizzaPage = ({ showBascetModalPage, showBascet, addItemFunk }) => {
  return (
    <div className="piza_page_wrapper">
      <div className="title medium-italic">
        <p>Pizza menu</p>
      </div>
      <PizzaMenuItems
        shwBascModPg={showBascetModalPage}
        shwBasc={showBascet}
        pizzas={pizzasItems}
        addItemFunk={addItemFunk}
      />
      <PizzaIngridientsToAdd
        addItemFunk={addItemFunk}
        shwBasc={showBascet}
        ingridients={ingridItems}
      />
    </div>
  );
};

export default PizzaPage;
