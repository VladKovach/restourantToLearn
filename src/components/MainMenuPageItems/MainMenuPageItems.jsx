import React from 'react'
const MainMenuPageItems = ({ items, shwBascModPg, shwBasc, addItemFunk }) => {
  const itemsData = [...items].map((item, index) => {
    item.name = 'Some MainMenu Item Name ' + ++index
    item.description =
      'Some MainMenu Item description' +
      ++index +
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ut nihil nemo rem. Molestiae, modi.'
    return (
      <div key={item.id} className="itemWithDescription">
        <a href="">
          <div className="mainMenuItem"></div>
        </a>
        <h3>{item.name}</h3>

        <p>{item.description}</p>
        <p className="weithOfItem">{item.weight} gr</p>
        <div className="itemPrice">Price: {item.price}$</div>

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
    <div className="pizzaMenuItems">
      <div className="pizzaItemContainer">{itemsData}</div>
    </div>
  )
}

export default MainMenuPageItems
