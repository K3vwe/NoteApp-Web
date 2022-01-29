import React from 'react';
import Note from './Note';
import styled from 'styled-components';

const NoteWrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 2em;
    padding-bottom: 2em;
    border-bottom: 1px solid #f5f4f0;
`;

function NoteFeed({ notes }){
    return(
        <NoteWrapper>
            {notes.map( note => (
                <div key={note.id}>
                    <Note note={note} />
                </div>
            ))}
        </NoteWrapper>
    );
}

export default NoteFeed;