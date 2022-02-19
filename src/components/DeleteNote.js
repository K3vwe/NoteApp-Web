import React from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import ButtonAsLink from './ButtonAsLink';
import { GET_MY_NOTES, GET_NOTES }  from '../gql/query';

const DELETE_NOTE = gql`
    mutation deleteNote($id: ID!){
        deleteNote(id: $id)
    }
`;

const DeleteNote = props => {

    const navigate = useNavigate() 
    
    const [ deleteNote ] = useMutation(DELETE_NOTE, {
        variables: {
            id: props.noteId
        },
        // refetch the GET_NOTES query to update cache
        refetchQueries: [{ query: GET_NOTES }, { query: GET_MY_NOTES }],
        onCompleted: data => {
            // when complete, redirect user to the mynotes page
            navigate('/mynotes');
        }
    })

    return(
        <ButtonAsLink onClick={deleteNote}>Delete Note</ButtonAsLink>
    );
}


export default DeleteNote;