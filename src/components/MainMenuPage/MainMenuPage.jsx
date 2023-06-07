import React from 'react'
import MainMenuPageHeadBar from '../MainMenuPageHeadBar/MainMenuPageHeadBar'
import MainMenuPageItems from '../MainMenuPageItems/MainMenuPageItems'
import './mainMenu.css'
import { mainMenuItems } from '../FakeItemsPrices/FakeItemsPrices'
const MainMenuPage = ({ showBascetModalPage, showBascet,addItemFunk }) => {
  return (
    <div>
      <MainMenuPageHeadBar />
      <MainMenuPageItems
        shwBascModPg={showBascetModalPage}
        shwBasc={showBascet}
        items={mainMenuItems}
        addItemFunk = {addItemFunk}
      />
    </div>
  )
}

export default MainMenuPage
