import React from 'react'
import MyRound10 from '../FakeItemsPrices/FakeItemsPrices'
const GrilPageItems = ({ items, shwBascModPg, shwBasc, addItemFunk }) => {
  const grilItems = [...items].map((item, index) => {
    item.name = 'Some GrilItem Name ' + ++index
    item.description =
      'Some GrilItems description' +
      ++index +
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ut nihil nemo rem. Molestiae, modi.'
    return (
      <div key={item.id} className="grilItemWithDescription">
        <a href="">
          <div className="grilItem"></div>
        </a>
        <h3>{item.name}</h3>

        <p>{item.description}</p>
        <p className="weithOfgrilItem">{item.weight} gr</p>
        <div className="grilItemPrice">Price: {item.price}$</div>

        <div>
          <button
            onClick={() => {
              shwBascModPg(true)
              addItemFunk({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
              })
            }}
            className="customButton buyItemBtn"
          >
            Buy
          </button>
          <button
            onClick={() => {
              shwBasc(true)
              addItemFunk({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
              })
            }}
            className="customButton addItemBtn"
          >
            Add
          </button>
        </div>
      </div>
    )
  })
  return (
    <div className="mealsCardsItems">
      <div className="pizzaItemContainer">{grilItems}</div>
    </div>
  )
}

export default GrilPageItems
