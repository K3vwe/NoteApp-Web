import React, { useEffect } from 'react';

function MyNotes() {
    // Change the Page title on page load
    useEffect( () => {
        document.title = 'MyNotes - Note App'
    });

    return(
        <div>
            <h1>MyFavorites</h1>
            <p>All personal notes goes here</p>
        </div>
    );
};

export default MyNotes;