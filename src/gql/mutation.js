import { gql } from '@apollo/client';

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

const EDIT_NOTE = gql`
mutation updateNote($id: ID!, $content: String!) {
  updateNote(id: $id, content: $content) {
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

const DELETE_NOTE = gql`
    mutation deleteNote($id: ID!){
        deleteNote(id: $id)
    }
`;

const SIGNIN_USER = gql`
    mutation($username: String, $password: String!) {
        signIn(username: $username, password: $password)
    }
`;


const SIGNUP_USER = gql`
    mutation($email: String!, $username: String!, $password: String!) {
        signUp(email: $email, username: $username, password: $password)
    }
`;

// add the toggle favorite mutation
const TOGGLE_FAVORITE = gql`
    mutation toggleFavorite($id: ID!){
        toggleFavorite(id: $id) {
            id
            favoriteCount
        }
    }
`;

export {NEW_NOTE, EDIT_NOTE, SIGNIN_USER, SIGNUP_USER, DELETE_NOTE, TOGGLE_FAVORITE};