import React from 'react';
import ReactMarkdown from 'react-markdown';

function Note({ note }) {
    return(
        <div>
            {note.author.username} {note.createdAt} {note.favoriteCount} {' '}
            <ReactMarkdown children={note.content} />
        </div>
    )
}

export default Note;