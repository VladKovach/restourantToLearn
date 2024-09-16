import React from "react";
import GrilPageItems from "../GrilPageItems/GrilPageItems";
import "./grilPage.css";
import { grilItems } from "../FakeItemsPrices/FakeItemsPrices";
const GrilPage = ({ showBascetModalPage, showBascet, addItemFunk }) => {
  return (
    <div className="gril_page_wrapper">
      <div className="title medium-italic">
        <p>Gril menu</p>
      </div>
      <GrilPageItems
        shwBascModPg={showBascetModalPage}
        shwBasc={showBascet}
        items={grilItems}
        addItemFunk={addItemFunk}
      />
    </div>
  );
};

export default GrilPage;
