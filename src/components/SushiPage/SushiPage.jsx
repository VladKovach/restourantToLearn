import React from 'react'
import SushiPageHeadBar from '../SushiPageHeadBar/SushiPageHeadBar'
import SushiPageItems from '../SushiPageItems/SushiPageItems'
import './sushiPage.css'
import { sushiItems } from '../FakeItemsPrices/FakeItemsPrices'
const SushiPage = ({ showBascetModalPage, showBascet ,addItemFunk}) => {
  return (
    <div>
      <SushiPageHeadBar />
      <SushiPageItems
        shwBascModPg={showBascetModalPage}
        shwBasc={showBascet}
        items={sushiItems}
        addItemFunk = {addItemFunk}
      />
    </div>
  )
}

export default SushiPage
