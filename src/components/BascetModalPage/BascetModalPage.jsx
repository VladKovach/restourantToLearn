import React, { useState } from "react";
import "./bascetModalPage.css";
const BascetModalPage = ({ active, setActive, addedItems, removeItem, updateQuantity }) => {
  const newAddedItems = addedItems.map((item, index) => (
    <div key={index + 5} className="addedItem">
      <div className="itemLogo"></div>
      <h3 className="itemName">{item.name}</h3>
      <div className="itemQuantityContainer">
        <div
          className="quantityBtns"
          onClick={() => {
            if (addedItems[index].quantity > 1) {
              const minusItems = [...addedItems];
              minusItems[index].quantity -= 1;
              minusItems[0].plus = false;
              minusItems[0].minus = true;
              updateQuantity(undefined, minusItems);
            }
          }}
        >
          -
        </div>
        <p className="quantity_number bold">{addedItems[index].quantity}</p>
        <div
          className="plusBtn quantityBtns"
          onClick={() => {
            const plusItems = [...addedItems];
            plusItems[index].quantity += 1;
            plusItems[0].plus = true;
            plusItems[0].minus = false;
            updateQuantity(undefined, plusItems);
          }}
        >
          +
        </div>
      </div>
      <div className="itemTotalPrice">
        Total : <p className="total_number bold">{(item.price * item.quantity).toFixed(2)}</p> $
      </div>
      <button onClick={() => removeItem(item)} className="deleteItemBtn quantityBtns">
        X
      </button>
    </div>
  ));
  return (
    <div
      className={active ? "bascModalPageContainer active" : "bascModalPageContainer"}
      onClick={() => {
        setActive(false);
      }}
    >
      <div
        className={active ? "modalContent active" : "modalContent"}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2>Your order</h2>
        <hr />
        <div className="addedItemsContainer">{newAddedItems}</div>
      </div>
    </div>
  );
};

export default BascetModalPage;
