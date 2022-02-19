import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';
import { useQuery } from '@apollo/client';

// Import components
import NoteUser from './NoteUser';
import { IS_LOGGED_IN } from '../gql/query';

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

    const {loading, error, data } = useQuery(IS_LOGGED_IN);
    
    // if data is loading, display a data loading message
    if(loading) <p>Loading...</p>;
    // if there's an error fetching the data, display an error message
    if(error) <p>Error!</p>;

    return(
        <StyledNote>
            <MetaData>
                <MetaInfo>
                    <em>by: </em>{note.author.username}<br />
                    {format(parseISO(note.createdAt), 'do MMM yyyy')}
                </MetaInfo>
                {data.isLoggedIn ? (
                    <UserAction>
                        <NoteUser note={note} />
                    </UserAction>
                ) : (
                    <UserAction>
                        <h4>Favorites: {note.favoriteCount}</h4> 
                    </UserAction>
                )}
            </MetaData>
                
            <ReactMarkdown children={note.content} />
        </StyledNote>
    )
}

export default Note;