import React from "react";
import { Link } from "react-router-dom";
import GetSvg from "../GetSvg/GetSvg";
import classes from "./footBar.module.css";
const FootBar = () => {
  return (
    <div className={classes.wrapper}>
      <Link className={classes.logo} to="/homePage">
        <GetSvg svg="shop" color="black" width="80" height="80" />
      </Link>
      <div className={classes.footerContent}>
        <Link className={classes.phone} to="/homePage">
          <h2> + ( 999 ) 999 99 99</h2>
        </Link>
        <h4> 45 Carmine Street New York, NY 100134 </h4>
      </div>
    </div>
  );
};

export default FootBar;
