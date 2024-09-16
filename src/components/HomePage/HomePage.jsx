import React from "react";
import GetOnStoresBtns from "../GetOnStoresBtns/GetOnStoresBtns";
import MenuWithFotos from "../MenuWithFotos/MenuWithFotos";
import SearchComponent from "../SearchComponent/SearchComponent";
import classes from "./homePage.module.css";
const HomePage = () => {
  return (
    <div className={classes.wrapper}>
      <p className={`${classes.title} medium-italic`}>Dive into various meals...</p>
      <SearchComponent />

      <MenuWithFotos />
      <GetOnStoresBtns />
    </div>
  );
};

export default HomePage;
