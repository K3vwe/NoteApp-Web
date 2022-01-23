import React from "react";
import { Link } from 'react-router-dom';

function Navigation () {
    return(
        <div>
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/mynotes">MyNotes</Link> </li>
                <li> <Link to="/favorites"><span aria-hidden="true" role="img">{'\u2B50'}</span>Favorites</Link> </li>
            </ul>
        </div>
    );
};

export default Navigation;