import React from 'react'
import GrilPageHeadBar from '../GrilPageHeadBar/GrilPageHeadBar'
import GrilPageItems from '../GrilPageItems/GrilPageItems'
import './grilPage.css'
import { grilItems } from '../FakeItemsPrices/FakeItemsPrices'
const GrilPage = ({ showBascetModalPage, showBascet ,addItemFunk}) => {
  return (
    <div>
      <GrilPageHeadBar />
      <GrilPageItems
        shwBascModPg={showBascetModalPage}
        shwBasc={showBascet}
        items={grilItems}
        addItemFunk = {addItemFunk}
      />
    </div>
  )
}

export default GrilPage
