import React from 'react'

const PizzaLogo = ({ className }) => {
  return <button className={`pizzaLogo ${className ? className : null}`}></button>
}

export default PizzaLogo
