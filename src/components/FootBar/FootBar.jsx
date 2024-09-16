import React from "react";
import { Link } from "react-router-dom";
import GetSvg from "../GetSvg/GetSvg";
import classes from "./footBar.module.css";
const FootBar = () => {
  return (
    <div className={classes.wrapper}>
      <Link className={classes.footBar} to="/homePage">
        <GetSvg svg="shop" color="black" />
      </Link>
      <div className={classes.footerContent}>
        <Link className={classes.numberInFooter} to="/homePage">
          <h2> + ( 999 ) 999 99 99</h2>
        </Link>
        <h4> 45 Carmine Street New York, NY 100134 </h4>
      </div>
    </div>
  );
};

export default FootBar;
