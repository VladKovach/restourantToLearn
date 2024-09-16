import React from "react";
import { Link } from "react-router-dom";
import classes from "./menyWithFotos.module.css";
const MenuWithFotos = () => {
  return (
    <div className={classes.menuGrid}>
      <div className={classes.imageContainer}>
        <Link className={classes.textContainer} to="/pizzaPage">
          <img src="\images\foodImgs\pizzaForMenu.jpg" alt="" />
          <h1 className="bottom-left">PIZZA</h1>
        </Link>
      </div>
      <div className={classes.imageContainer}>
        <Link className={classes.textContainer} to="/grilPage">
          <img src="\images\foodImgs\grilForMenu.jpg" alt="" />
          <h1 className="bottom-left">GRIL</h1>
        </Link>
      </div>
      <div className={classes.imageContainer}>
        <Link className={classes.textContainer} to="/mainMenuPage">
          <img src="\images\foodImgs\salatForMenu.jpg" alt="" />
          <h1 className="bottom-left">MAIN MENU</h1>
        </Link>
      </div>
      <div className={classes.imageContainer}>
        <Link className={classes.textContainer} to="/sushiPage">
          <img src="\images\foodImgs\sushiForMenu.jpg" alt="" />
          <h1 className="bottom-left">SUSHI</h1>
        </Link>
      </div>
    </div>
  );
};

export default MenuWithFotos;
