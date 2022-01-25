import React from 'react';
import logo from '../img/logo.svg';
import styled from 'styled-components';

const HeaderBar = styled.header`
    display: flex;
    heigth: 64px;
    width: 100%;
    padding: 0.5em 1em;
    position: fixed;
    align-items: center;
    background-color: #FFF;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
    z-index: 1;
`;

const LogoText = styled.h1`
    display: inline;
    margin: 0;
    padding: 0;
`;

function Header() {
    return(
        <div>
            <HeaderBar>
                <img src={logo} alt="Note App Logo" height="40"/>
                <LogoText>Notedly</LogoText>
            </HeaderBar>
        </div>
    );
};

export default Header;