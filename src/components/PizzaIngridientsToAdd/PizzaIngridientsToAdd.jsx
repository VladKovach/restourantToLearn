import React from 'react'

const PizzaIngridientsToAdd = ({ ingridients, shwBasc, addItemFunk }) => {
  const ingridArray = [...ingridients].map((ingrid, index) => {
    ingrid.name = 'Some ingrid name' + ++index
    return (
      <div key={ingrid.id} className="ingridItemWithDescription">
        <div className="ingridItem"></div>

        <h3>{ingrid.name}</h3>
        <div className="price">Price: {ingrid.price}$</div>
        <div>
          <button
            onClick={() => {
              shwBasc(true)
              addItemFunk({
                id: ingrid.id,
                name: ingrid.name,
                price: ingrid.price,
                quantity: ingrid.quantity,
              })
            }}
            className="customButton addPizzaBtn"
          >
            Add
          </button>
        </div>
      </div>
    )
  })

  return (
    <div className="pizzaIngridientsToAdd">
      <div className="addIngridHeader">
        <h2>Add Ingridients</h2>
      </div>
      {ingridArray}
    </div>
  )
}

export default PizzaIngridientsToAdd
