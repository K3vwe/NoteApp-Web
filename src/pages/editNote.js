import React, { useEffect } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { useParams, useNavigate } from 'react-router-dom';

import NoteForm from '../components/NoteForm';
import { GET_NOTE, GET_ME } from '../gql/query';

const EDIT_NOTE = gql`
mutation($id: ID!, $content: String)  {
    updateNote(id: $id, content: $content) {
      id
      content
      favoriteCount
      favoritedBy {
        id
        username
      }
      author{
        id
        username
      }
    }
  }
`;

const EditNote = () => {

    // Change the title of the document
    useEffect( () => {
        document.title = 'EditNote - NoteApp'
    });

    const navigate = useNavigate();
    let params = useParams();
    // Store the ID found in the URL as a variable
    const id = params.id;

    // launch a query to get note based on the ID
    const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });
    // launch a query to get current user details
    const { data: userdata } = useQuery(GET_ME);

    // define the mutation data
    const [ editNote ] = useMutation(EDIT_NOTE, {
        variables: {
            id
        },
        onCompleted: () => {
            navigate(`/note/${id}`);
        }
    })

    // if data is loading, send a loading message
    if(loading) return <h4>Loading...</h4>
    // if an error occur while requesting data
    if(error) return `Error! ${error}`
    // if the current user and author of the note don't match
    if(userdata.me.id !== data.note.author.id){
        return <p>You do not have access to edit this note</p>;
    }

    // pass the data and mutation to the NoteForm component
    <NoteForm content={data.note.content} action={editNote} />

    return(
        <div>
            <p>Edit Note</p>
        </div>
    );
}

export default EditNote;