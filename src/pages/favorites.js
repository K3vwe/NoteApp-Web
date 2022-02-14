import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

import NoteFeed from '../components/NoteFeed';
import { GET_MY_FAVORITES } from '../gql/query';

function Favorites() {
    // Change the Page title on page load
    useEffect( () => {
        document.title = 'Favorites - Note App'
    });

    const { data, loading, error } = useQuery(GET_MY_FAVORITES);
    
    // if data is loading, display a loading message
    if(loading) return 'Loading...';
    // if error occurs while loading favorite notes
    if(error) return `Error ${error.message}`;

    // if query is sucessful and there are favorite notes, return the feed of notes
    // else if query is successful, and there aren't notes, display a message
    if(data.me.favorites.length !== 0) {
        return <NoteFeed notes={data.me.favorites} />
    } else {
        return <p>User has no favorite notes</p>
    }

};

export default Favorites;