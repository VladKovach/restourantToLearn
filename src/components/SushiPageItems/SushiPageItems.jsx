import React from 'react'
const SushiPageItems = ({ items, shwBascModPg, shwBasc, addItemFunk }) => {
  const sushiItems = [...items].map((item, index) => {
    item.name = 'Some SushiItem Name ' + ++index
    item.description =
      'Some SushiItem description' +
      ++index +
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ut nihil nemo rem. Molestiae, modi.'
    return (
      <div key={item.id} className="sushiItemWithDescription">
        <a href="">
          <div className="sushiItem"></div>
        </a>
        <h3>{item.name}</h3>

        <p>{item.description}</p>
        <p className="weithOfSushiItem">{item.weight} gr</p>
        <div className="sushiItemPrice">Price: {item.price}$</div>

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
            className="button-30 buyItemBtn"
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
            className="button-30 addItemBtn"
          >
            Add
          </button>
        </div>
      </div>
    )
  })
  return (
    <div className="pizzaMenuItems">
      <div className="pizzaItemContainer">{sushiItems}</div>
    </div>
  )
}

export default SushiPageItems
