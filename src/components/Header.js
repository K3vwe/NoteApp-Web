import React from 'react';
import { useQuery } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import { isLoggedInVar } from '../cache';

import logo from '../img/logo.svg';
import styled from 'styled-components';
import ButtonAsLink from './ButtonAsLink';
import { IS_LOGGED_IN } from '../gql/query';

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

    // query isLoggedIn from local cache
    const { data } = useQuery(IS_LOGGED_IN);
    const navigate = useNavigate();

    return(
        <HeaderBar>
            <img src={logo} alt="Note App Logo" height="40"/>
            <LogoText>Notedly</LogoText>
            <UserState>
                {/* Display Logout option is signedin else show signin and signout options */}
                {data.isLoggedIn ? (
                    <ButtonAsLink onClick={ () => {
                        // remove token from localStorage
                        localStorage.removeItem('token');
                        // set isLoggedInVar to false
                        isLoggedInVar(false);
                        // redirect to home page
                        navigate("/");
                    }}>
                        Log Out
                    </ButtonAsLink>
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