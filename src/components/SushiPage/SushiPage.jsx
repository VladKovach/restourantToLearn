import React from "react";
import SushiPageItems from "../SushiPageItems/SushiPageItems";
import "./sushiPage.css";
import { sushiItems } from "../FakeItemsPrices/FakeItemsPrices";
const SushiPage = ({ showBascetModalPage, showBascet, addItemFunk }) => {
  return (
    <div className="sushi_page_wrapper">
      <div className="title medium-italic">
        <p>Pizza menu</p>
      </div>
      <SushiPageItems
        shwBascModPg={showBascetModalPage}
        shwBasc={showBascet}
        items={sushiItems}
        addItemFunk={addItemFunk}
      />
    </div>
  );
};

export default SushiPage;
