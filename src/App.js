import React, { useState } from "react";
import "./styles/index.css";
import FootBar from "./components/FootBar/FootBar";
import BascetToShow from "./components/BascetToShow/BascetToShow";
import HeadBar from "./components/HeadBar/HeadBar";
import BascetModalPage from "./components/BascetModalPage/BascetModalPage";
import PizzaPage from "./components/PizzaPage/PizzaPage";
import HomePage from "./components/HomePage/HomePage";
import MainMenuPage from "./components/MainMenuPage/MainMenuPage";
import SushiPage from "./components/SushiPage/SushiPage";
import GrilPage from "./components/GrilPage/GrilPage";
import { isIdEqual } from "./components/FakeItemsPrices/FakeItemsPrices";
import { Route, Routes } from "react-router-dom";

function App() {
  const [addToBascetClicked, setaddToBascetClicked] = useState(false);
  const [buybasketClicked, setbuyBasketClicked] = useState(false);
  const [addedItems, setAddedItems] = useState([]);
  const [addedItemsCounter, setAddedItemsCounter] = useState(0);
  const addItemHandler = (item, updateItems) => {
    if (updateItems) {
      if (updateItems[0].minus) {
        setAddedItemsCounter(addedItemsCounter - 1);
        setAddedItems(updateItems);
      } else if (updateItems[0].plus) {
        setAddedItemsCounter(addedItemsCounter + 1);
        setAddedItems(updateItems);
      }
    } else if (item) {
      setAddedItemsCounter(addedItemsCounter + 1);

      if (isIdEqual(addedItems, item)) {
        const sameItems = addedItems.map((addedItem) => {
          if (addedItem.id === item.id) {
            // Update the quantity of the existing item
            return {
              ...addedItem,
              quantity: addedItem.quantity + 1,
            };
          }
          return addedItem;
        });

        setAddedItems(sameItems);
      } else {
        setAddedItems([...addedItems, item]);
      }
    }
  };

  // const updateItemsQuantity = (quantityList) => {
  //   setAddedItems(
  //     [...addedItems].map((item, index) => {
  //       item.quantity = quantityList[index]
  //     })
  //   )

  //   console.log(addedItems)
  // }
  const emptyCardItems = addedItemsCounter === 0;
  // const updateAddedItemsCount = (infoItem) => {
  //   setAddedItemsCounter(addedItemsCounter - infoItem.quantity)
  // }

  const removeAddedItem = (itemToDelet) => {
    setAddedItemsCounter(addedItemsCounter - itemToDelet.quantity);
    setAddedItems(addedItems.filter((itm) => itm.id !== itemToDelet.id));
    if (addedItems.length === 1) {
      setbuyBasketClicked(false);
    }
  };

  return (
    <div className="app medium">
      <HeadBar
        emptyCardItems={emptyCardItems}
        addedItemsCounter={addedItemsCounter}
        addToBascetClicked={addToBascetClicked}
        setaddToBascetClicked={setaddToBascetClicked}
        setbuyBasketClicked={setbuyBasketClicked}
      />

      <Routes>
        <Route path="/homePage" element={<HomePage />} />

        <Route
          path="/pizzaPage"
          element={
            <PizzaPage
              addItemFunk={addItemHandler}
              showBascetModalPage={setbuyBasketClicked}
              showBascet={setaddToBascetClicked}
            />
          }
        />

        <Route
          path="/mainMenuPage"
          element={
            <MainMenuPage
              addItemFunk={addItemHandler}
              showBascetModalPage={setbuyBasketClicked}
              showBascet={setaddToBascetClicked}
            />
          }
        />

        <Route
          path="/sushiPage"
          element={
            <SushiPage
              addItemFunk={addItemHandler}
              showBascetModalPage={setbuyBasketClicked}
              showBascet={setaddToBascetClicked}
            />
          }
        />

        <Route
          path="/grilPage"
          element={
            <GrilPage
              addItemFunk={addItemHandler}
              showBascetModalPage={setbuyBasketClicked}
              showBascet={setaddToBascetClicked}
            />
          }
        />
      </Routes>
      <FootBar />

      {/*  popup */}

      <BascetModalPage
        active={buybasketClicked && !emptyCardItems}
        setActive={setbuyBasketClicked}
        addedItems={addedItems}
        removeItem={removeAddedItem}
        updateQuantity={addItemHandler}
      />
    </div>
  );
}

export default App;
