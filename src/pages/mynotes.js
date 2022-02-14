import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_MY_NOTES } from '../gql/query';
import NoteFeed from '../components/NoteFeed';

function MyNotes() {
    // Change the Page title on page load
    useEffect( () => {
        document.title = 'MyNotes - Note App'
    });

    const { loading, error, data }  = useQuery(GET_MY_NOTES);
    
    // if data is loading, display a loading message
    if(loading) <p>Loading User Notes</p>
    // if error occurs while loading notes
    if(error) <p>Error loading user notes</p>

    // if query is sucessful and there are notes, return the feed of notes
    // else if query is successful, and there aren't notes, display a message
    if(data.me.notes.length !== 0){
        return <NoteFeed notes={data.me.notes} />
    } else {
        return <p>No user note added</p>
    }
};

export default MyNotes;