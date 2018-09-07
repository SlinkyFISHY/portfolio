import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Company Name</h1>
        <p>Hollie Emery</p>
    </header>
)

export default Header
