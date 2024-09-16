import React from "react";
import MainMenuPageItems from "../MainMenuPageItems/MainMenuPageItems";
import "./mainMenu.css";
import { mainMenuItems } from "../FakeItemsPrices/FakeItemsPrices";
const MainMenuPage = ({ showBascetModalPage, showBascet, addItemFunk }) => {
  return (
    <div className="mainMenu_page_wrapper">
      <div className="title medium-italic">
        <p>Main menu</p>
      </div>
      <MainMenuPageItems
        shwBascModPg={showBascetModalPage}
        shwBasc={showBascet}
        items={mainMenuItems}
        addItemFunk={addItemFunk}
      />
    </div>
  );
};

export default MainMenuPage;
