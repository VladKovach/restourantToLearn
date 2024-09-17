import React from "react";
import { Link } from "react-router-dom";
import classes from "./menuWithFotos.module.css";
const MenuWithFotos = () => {
  return (
    <div className={classes.menuGrid}>
      <div className={classes.imageContainer}>
        <Link to="/pizza">
          <div className={classes.textContainer}>
            <img src="\images\foodImgs\pizzaForMenu.jpg" alt="" />
            <h2 className={classes.text}>PIZZA</h2>
          </div>
        </Link>
      </div>
      <div className={classes.imageContainer}>
        <Link to="/gril">
          <div className={classes.textContainer}>
            <img src="\images\foodImgs\grilForMenu.jpg" alt="" />
            <h2 className={classes.text}>GRIL</h2>
          </div>
        </Link>
      </div>
      <div className={classes.imageContainer}>
        <Link to="/main_menu">
          <div className={classes.textContainer}>
            <img src="\images\foodImgs\salatForMenu.jpg" alt="" />
            <h2 className={classes.text}>MAIN MENU</h2>
          </div>
        </Link>
      </div>
      <div className={classes.imageContainer}>
        <Link to="/sushi">
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
