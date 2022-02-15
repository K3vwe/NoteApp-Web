import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

const NoteUser = props => {
    return <Link to={`/edit/${props.note.id}`}>Edit</Link>
}

export default NoteUser;