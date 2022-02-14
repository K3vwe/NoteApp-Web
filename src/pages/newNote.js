import React, { useEffect } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router';

// import NoteForm Component
import NoteForm from '../components/NoteForm';
import { GET_NOTES, GET_MY_NOTES } from '../gql/query';

// mutation command to create a new note
const NEW_NOTE = gql`
    mutation($content: String!) {
        newNote(content: $content) {
            id
            content
            createdAt
            favoriteCount
            favoritedBy {
                id
                username
            }
            author {
                id
                username
            }
        }
    }
`;

const NewNote = () => {

    const navigate = useNavigate();

    useEffect( () => {
        document.title = 'Create Note - NoteApp'
    });

    const [ data, { loading, error } ] = useMutation(NEW_NOTE, {
        // refetch the GET_NOTES query to update cache
        refetchQueries: [{ query: GET_NOTES }, { query: GET_MY_NOTES }],
        onCompleted: data => {
            // when complete, redirect user to the user created notepage.
            navigate(`note/${data.newNote.id}`);
        }
    })

    return(
        <React.Fragment>
            {/* as the muatation is loading, display a loading page */}
            {loading && <p>Loading</p>}
            {/* if there is an error creating note, Display error message */}
            {error && <p>Error creating new note</p>}
            {/* pass the mutation data as a prop to NoteForm */}
            <NoteForm action={data} />
        </React.Fragment>
    );

}

export default NewNote;