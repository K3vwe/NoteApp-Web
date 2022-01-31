import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';

// import Note Component
import Note from '../components/Note';

// GraphQl Query to get a note
const GET_NOTE = gql`
    query note($id: ID!){
        note(id: $id){
            id
            createdAt
            content
            favoriteCount
            author {
                username
                id
            }
        }
    }
`;

const NotePage = () => {

    let params = useParams();
    // Store the ID found in the URL as a variable
    const id = params.id;

    // launch a query to get note based on the ID
    const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });

    // if data is loading, send a loading message
    if(loading) return <h4>Loading...</h4>

    // if an error occur while requesting data
    if(error) return `Error! ${error}`

    // if data is sucessful, display the data to the UI
    return(
        <Note note={data.note} />
    );
}

export default NotePage;