import React from 'react'
import './style.css'

function Header() {
    return (
        <header>
            <img className="logo" src={require('../../logo.png')} alt="logo"/>
            <div className="header-text">Thermostat Repair / Replacement</div>
        </header>
    )
}

export default Header