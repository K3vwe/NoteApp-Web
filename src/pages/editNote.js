import React, { useEffect } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { useParams, useNavigate } from 'react-router-dom';

// import Note Component
import NoteForm from '../components/NoteForm';
import { GET_NOTE, GET_MY_FAVORITES } from '../gql/query';
import { EDIT_NOTE } from '../gql/mutation';

const EditNote = () => {
  // Change the document title
  useEffect( () => {
    document.title='editnote - NoteApp'
  });

  let params = useParams();
    // Store the ID found in the URL as a variable
    const id = params.id;
    const navigate = useNavigate();

    // Get current user data
    const { data: userdata } = useQuery(GET_MY_FAVORITES)
    // launch a query to get note based on the ID
    const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });

    // editNote mutation request
    const [editNote] = useMutation(EDIT_NOTE, {
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
    // if the current user and author does not match
    if(userdata.me.id !== data.note.author.id ){
      return <p>You don't have access to edit this note</p>
    }

    // if data is sucessful, display the data to the UI
    return(
        <NoteForm content={data.note.content} action={editNote} />
    );
}

export default EditNote;