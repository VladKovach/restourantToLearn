import React from "react";
import { Link } from "react-router-dom";
import classes from "./menuWithFotos.module.css";
import pizzaImg from "../../assets/images/foodImgs/pizzaForMenu.jpg";
import mainMenuImg from "../../assets/images/foodImgs/salatForMenu.jpg";
import sushiImg from "../../assets/images/foodImgs/sushiForMenu.jpg";
import grilImg from "../../assets/images/foodImgs/grilForMenu.jpg";

const MenuWithFotos = () => {
  return (
    <div className={classes.menuGrid}>
      <div className={classes.imageContainer}>
        <Link to="/pizza">
          <div className={classes.textContainer}>
            <img src={pizzaImg} alt="" />
            <h2 className={classes.text}>PIZZA</h2>
          </div>
        </Link>
      </div>
      <div className={classes.imageContainer}>
        <Link to="/gril">
          <div className={classes.textContainer}>
            <img src={grilImg} alt="" />
            <h2 className={classes.text}>GRIL</h2>
          </div>
        </Link>
      </div>
      <div className={classes.imageContainer}>
        <Link to="/main_menu">
          <div className={classes.textContainer}>
            <img src={mainMenuImg} alt="" />
            <h2 className={classes.text}>MAIN MENU</h2>
          </div>
        </Link>
      </div>
      <div className={classes.imageContainer}>
        <Link to="/sushi">
          <div className={classes.textContainer}>
            <img src={sushiImg} alt="" />
            <h2 className={classes.text}>SUSHI</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MenuWithFotos;
