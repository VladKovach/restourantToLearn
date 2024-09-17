import React from "react";
import ingridImg from "../../assets/images/foodImgs/ingridient.jpg";

const PizzaIngridientsToAdd = ({ ingridients, shwBasc, addItemFunk }) => {
  const ingridArray = [...ingridients].map((ingrid, index) => {
    ingrid.name = "Some ingrid name" + ++index;
    return (
      <div key={ingrid.id} className="ingridItemWrapper">
        <img src={ingridImg} className="item_img"></img>

        <h3>{ingrid.name}</h3>
        <div className="price">Price: {ingrid.price}$</div>
        <div>
          <button
            onClick={() => {
              shwBasc(true);
              addItemFunk({
                id: ingrid.id,
                name: ingrid.name,
                price: ingrid.price,
                quantity: ingrid.quantity,
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
    <>
 
      <p className="bold addIngrid_title">Add Ingridients</p>
      <div className="pizzaIngridientsToAdd">{ingridArray}</div>
    </>
  );
};

export default PizzaIngridientsToAdd;
