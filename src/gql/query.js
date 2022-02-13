import { gql } from '@apollo/client';

// query the cache for isLoggedIn data without making a network request
const IS_LOGGED_IN = gql`
    query {
        isLoggedIn @client
    }
`;

// GraphQL query stored as a variable
const GET_NOTES = gql`
    query($cursor: String) {
        noteFeed(cursor: $cursor) {
            notes {
                id
                createdAt
                content
                favoriteCount
                author {
                id
                email
                username
                }
            }
            hasNextPage
            cursor
        }
    }
`;

// GraphQl Query to get a note
const GET_NOTE = gql`
    query note($id: ID!){
        note(id: $id){
            id
            createdAt
            content
            favoriteCount
            author {
                username
                id
            }
        }
    }
`;

export { IS_LOGGED_IN, GET_NOTES, GET_NOTE };