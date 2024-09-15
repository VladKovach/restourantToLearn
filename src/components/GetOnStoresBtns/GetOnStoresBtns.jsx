import React from "react";
import classes from "./getOnStores.module.css";
const GetOnStoresBtns = () => {
  return (
    <div className={classes.getOnStoresBtns}>
      <button className={classes.getOnAppleStore}></button>
      <button className={classes.getOnGooglePlay}></button>
    </div>
  );
};

export default GetOnStoresBtns;
