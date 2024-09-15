import React, { useEffect, useState } from "react";
import "./bascetToShow.css";
import GetSvg from "../GetSvg/GetSvg";
const BascetToShow = ({ showBascetModalPage, isActive, addedItemsCounter }) => {
  const [activeAnimation, setActiveAnimation] = useState(false);

  const toggleClass = () => {
    setActiveAnimation(true);
    setTimeout(() => {
      setActiveAnimation(false);
    }, 400);
  };
  useEffect(toggleClass, [addedItemsCounter]);
  return (
    <div className="bascetToShow_wrapper">
      <div
        className={
          isActive
            ? activeAnimation
              ? " bascetToShow  addingItemsAnimation "
              : "bascetToShow"
            : "bascetToShow hidden"
        }
        onClick={() => {
          showBascetModalPage(true);
        }}
      >
        <div className="bascetDiv">
          <GetSvg svg="cart" width="30" height="30" />
        </div>
        <span className="itemsCounter">{addedItemsCounter}</span>
      </div>
    </div>
  );
};

export default BascetToShow;
