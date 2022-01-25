import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    padding: 1em;
    background: #f5f4f0;

    @media (max-width: 700px){
        padding-top: 64px;
    }

    @media (min-width: 700px) {
        width: 220px;
        height: calc(100% - 64px);
        position: fixed;
        overflow: auto;
    }
`;

const NavLink = styled.ul`
    margin: 0;
    padding: 0;
    line-height: 2;
    list-style: none;

    a {
        text-decoration: none;
        font-style: bold;
        font-size: 1.1em;
        color: #333;
    }

    a:hover,
    a:focus {
        color: #0077cc
    }

    a:visited: {
        color: #333;
    }
`;

function Navigation () {
    return(
        <Nav>
            <NavLink>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/mynotes">MyNotes</Link> </li>
                <li> <Link to="/favorites"><span aria-hidden="true" role="img">{'\u2B50'}</span>Favorites</Link> </li>
            </NavLink>
        </Nav>
    );
};

export default Navigation;