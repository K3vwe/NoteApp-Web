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

const GET_MY_NOTES = gql`
query me {
    me {
      id
      username
      notes {
         id
         content
         createdAt
         favoriteCount
         author {
           id
           username
         }
      }
    }
  }
`;

const GET_MY_FAVORITES = gql`
query me {
    me {
      id
      username
      favorites {
        id
        createdAt
        content
        favoriteCount
        author {
          id
          username
        }
      }
    }
  }
`;

export { IS_LOGGED_IN, GET_NOTES, GET_NOTE, GET_MY_NOTES, GET_MY_FAVORITES };