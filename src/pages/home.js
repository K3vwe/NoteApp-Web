import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

    return (
        <div>
            <h1>This is the Home Page</h1>
            <p>Data Base Notes Saved</p>
            {/* Add a couple of components to link to */}
            <ul>
                <li> <Link to="/mynotes">MyNotes</Link> </li>
                <li> <Link to="/favorites">Favorites</Link> </li>
            </ul>
        </div>
    );
}

export default Home;