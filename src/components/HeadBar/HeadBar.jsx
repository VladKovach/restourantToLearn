import React from 'react'
import './headBarBtns.css'
import PizzaLogo from '../PizzaLogo/PizzaLogo'
import { Link } from 'react-router-dom'
const HeadBar = () => {
  return (
    <div className="headBar">
      <Link to="/homePage">
        <PizzaLogo />
      </Link>
      <div className="headBarNemuButn">
        <Link to="/pizzaPage">
          <button className="button-84 ">PIZZA</button>
        </Link>
        <Link to="/mainMenuPage">
          <button className="button-84 ">MAIN MENU</button>
        </Link>

        <Link to="/sushiPage">
          <button className="button-84 ">SUSHI</button>
        </Link>

        <Link to="/grilPage">
          <button className="button-84 ">GRIL</button>
        </Link>
      </div>
      <div>
        <a href="">
          <button className="facebookBtn"></button>
        </a>
        <a href="">
          <button className="instaBtn"> </button>
        </a>
      </div>
    </div>
  )
}

export default HeadBar
