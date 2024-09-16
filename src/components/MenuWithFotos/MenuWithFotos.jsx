import React from "react";
import { Link } from "react-router-dom";
import classes from "./menyWithFotos.module.css";
const MenuWithFotos = () => {
  return (
    <div className={classes.menuGrid}>
      <div className={classes.imageContainer}>
        <Link to="/pizzaPage">
          <div className={classes.textContainer}>
            <img src="\images\foodImgs\pizzaForMenu.jpg" alt="" />
            <h2 className={classes.text}>PIZZA</h2>
          </div>
        </Link>
      </div>
      <div className={classes.imageContainer}>
        <Link to="/grilPage">
          <div className={classes.textContainer}>
            <img src="\images\foodImgs\grilForMenu.jpg" alt="" />
            <h2 className={classes.text}>GRIL</h2>
          </div>
        </Link>
      </div>
      <div className={classes.imageContainer}>
        <Link to="/mainMenuPage">
          <div className={classes.textContainer}>
            <img src="\images\foodImgs\salatForMenu.jpg" alt="" />
            <h2 className={classes.text}>MAIN MENU</h2>
          </div>
        </Link>
      </div>
      <div className={classes.imageContainer}>
        <Link to="/sushiPage">
          <div className={classes.textContainer}>
            <img src="\images\foodImgs\sushiForMenu.jpg" alt="" />
            <h2 className={classes.text}>SUSHI</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MenuWithFotos;
