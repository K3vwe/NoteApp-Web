import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';

const StyledNote = styled.article`
    max-width: 100%;
    margin: 0 auto;
`;

const MetaData = styled.div`
    @media (min-width: 500px){
        display: flex;
        align-items: center;
    }
`;

const MetaInfo = styled.div`
    padding-right: 1em;
`;

const UserAction = styled.div`
    margin-left: auto;
`;

function Note({ note }) {
    return(
        <StyledNote>
            <MetaData>
                <MetaInfo>
                    <em>by: </em>{note.author.username}<br />
                    {format(parseISO(note.createdAt), 'do MMM yyyy')}
                </MetaInfo>
                <UserAction>
                    <h4>Favorites: {note.favoriteCount}</h4> 
                </UserAction>
                <ReactMarkdown children={note.content} />
            </MetaData>
        </StyledNote>
    )
}

export default Note;