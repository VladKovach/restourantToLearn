import React, { useEffect, useState } from 'react'
import './bascetToShow.css'
const BascetToShow = ({ showBascetModalPage, isItemAdded, addedItemsCounter }) => {
  const [active, setActive] = useState(false)

  const toggleClass = () => {
    setActive(true)
    setTimeout(() => {
      setActive(false)
    }, 400)
  }
  useEffect(toggleClass, [addedItemsCounter])
  return (
    <div
      className={active ? ' bascetToShow  addingItemsAnimation ' : 'bascetToShow'}
      onClick={() => {
        showBascetModalPage(true)
      }}
    >
      <div className="bascetDiv"></div>
      <span className="itemsCounter">{addedItemsCounter}</span>
    </div>
  )
}

export default BascetToShow
