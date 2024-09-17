import React from "react";
import { Link } from "react-router-dom";
import GetSvg from "../GetSvg/GetSvg";
import classes from "./footBar.module.css";
const FootBar = () => {
  return (
    <div className={classes.wrapper}>
      <Link className={classes.logo} to="/home_page">
        <GetSvg svg="shop" color="black" width="80" height="80" />
      </Link>
      <div className={classes.footerContent}>
          <p className={`${classes.phone} bold-italic`}> + ( 999 ) 999 99 99</p>
        <h4> 45 Carmine Street New York, NY 100134 </h4>
      </div>
    </div>
  );
};

export default FootBar;
