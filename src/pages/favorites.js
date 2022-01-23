import React, { useEffect } from 'react';

function Favorites() {
    // Change the Page title on page load
    useEffect( () => {
        document.title = 'Favorites - Note App'
    });

    return(
        <div>
            <h1>Favorites</h1>
            <p>All favorite notes goes here</p>
        </div>
    );
};

export default Favorites;