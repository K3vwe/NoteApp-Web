import React from 'react';
import logo from '../img/logo.svg';

function Header() {
    return(
        <div>
            <header>
                <img src={logo} alt="Note App Logo" height="40"/>
                <h1>Notedly</h1>
            </header>
        </div>
    );
};

export default Header;