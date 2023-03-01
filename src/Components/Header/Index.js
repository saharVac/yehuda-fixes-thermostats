import React from 'react'
import './style.css'

function Header() {
    return (
        <header>
            <img className="logo" src={require('../../logo.png')} alt="logo" />
        </header>
    )
}

export default Header