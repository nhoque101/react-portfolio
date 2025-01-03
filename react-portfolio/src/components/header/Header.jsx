import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import ME from '../../assets/mee.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm</h5>
        <h1>Naimul Hoque</h1>
        <h5 className="text-light">Full-stack Developer</h5>

        <CTA />

        <div className="me">
            <img src={ME} alt=""/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>


      </div>

    </header>
  )
}

export default Header