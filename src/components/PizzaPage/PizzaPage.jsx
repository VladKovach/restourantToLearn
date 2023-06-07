import React from 'react'
import './pizzaPage.css'
import PizzaHeadBar from '../PizzaHeadBar/PizzaHeadBar'
import PizzaMenuItems from '../PizzaMenuItems/PizzaMenuItems'
import PizzaIngridientsToAdd from '../PizzaIngridientsToAdd/PizzaIngridientsToAdd'
import { pizzasItems, ingridItems } from '../FakeItemsPrices/FakeItemsPrices'
import { BrowserRouter, Route } from 'react-router-dom'

const PizzaPage = ({ showBascetModalPage, showBascet, addItemFunk }) => {
  return (
    <div>
      <PizzaHeadBar />
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
  )
}

export default PizzaPage
