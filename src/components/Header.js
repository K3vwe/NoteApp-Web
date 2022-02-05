import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

import logo from '../img/logo.svg';
import styled from 'styled-components';

// query the cache for isLoggedIn data without making a network request
const IS_LOGGED_IN = gql`
    query {
        isLoggedIn @client
    }
`;

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

const UserState = styled.div`
    margin-left: auto;
`;

function Header() {
    const { data } = useQuery(IS_LOGGED_IN);

    return(
        <HeaderBar>
            <img src={logo} alt="Note App Logo" height="40"/>
            <LogoText>Notedly</LogoText>
            <UserState>
                {/* Display Logout option is signedin else show signin and signout options */}
                {data.isLoggedIn ? (
                    <p>Log out</p>
                ) : (
                    <p>
                        <Link to={'./signin'}>Sign In</Link> or{' '}
                        <Link to={'./signup'}>Sign Up</Link>
                    </p>
                )}
            </UserState>
        </HeaderBar>
    );
};

export default Header;