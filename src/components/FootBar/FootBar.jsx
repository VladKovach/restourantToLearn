import React from 'react'
import PizzaLogo from '../PizzaLogo/PizzaLogo'
import { Link } from 'react-router-dom'

const FootBar = () => {
  return (
    <div className="footBar">
      <Link className="footBar" to="/homePage">
        <PizzaLogo className={'footerLogo'} />
      </Link>
      <div className='footerContent'>
        <Link className="numberInFooter" to="/homePage">
          <h1> + ( 999 ) 999 99 99</h1>
        </Link>
        <h4> 45 Carmine Street New York, NY 100134 </h4>
      </div>
    </div>
  )
}

export default FootBar
