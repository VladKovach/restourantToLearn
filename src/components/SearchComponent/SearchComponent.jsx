import React from "react";
import classes from "./searchComponent.module.css";
const SearchComponent = () => {
  return (
    <div className={classes.searchComponent}>
      <input placeholder="What do you want?" className="customButton light" type="text" />
      <button className="customButton light">Search</button>
    </div>
  );
};

export default SearchComponent;
