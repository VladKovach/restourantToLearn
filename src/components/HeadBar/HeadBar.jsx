import React from "react";
import classes from "./headBar.module.css";
import { Link } from "react-router-dom";
import GetSvg from "../GetSvg/GetSvg";
import BascetToShow from "../BascetToShow/BascetToShow";
const HeadBar = ({
  addToBascetClicked,
  emptyCardItems,
  setaddToBascetClicked,
  setbuyBasketClicked,
  addedItemsCounter,
}) => {
  return (
    <div className={classes.headBar}>
      <div className={classes.container}>
        <Link to="/homePage">
          <GetSvg svg="shop" />
        </Link>
        <div className={classes.headBarNemuButn}>
          <Link className={classes.header_btn} to="/pizzaPage">
            <button className="bold">PIZZA</button>
          </Link>
          <Link className={classes.header_btn} to="/mainMenuPage">
            <button className="bold">MAIN MENU</button>
          </Link>

          <Link className={classes.header_btn} to="/sushiPage">
            <button className="bold">SUSHI</button>
          </Link>

          <Link className={classes.header_btn} to="/grilPage">
            <button className="bold">GRIL</button>
          </Link>
        </div>
        <div className={classes.socialLogos_container}>
          <button>
            <GetSvg svg="facebook" />
          </button>
          <button>
            <GetSvg svg="instagram" />
          </button>
          <BascetToShow
            isActive={addToBascetClicked && !emptyCardItems}
            showBascetModalPage={setbuyBasketClicked}
            resetClick={setaddToBascetClicked}
            addedItemsCounter={addedItemsCounter}
          />
        </div>
      </div>
    </div>
  );
};

export default HeadBar;
