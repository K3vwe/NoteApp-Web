import React from 'react';
import Button from '../components/Button';

// import the required libraries to query server
import { useQuery, gql } from '@apollo/client';

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

function Home() {

    // QueryHook
    const { loading, error, data } = useQuery(GET_NOTES);

    // if data is loading, return a loading message
    if(loading) return <h4>Data Loading...</h4>

    // if error occurs while loading data, output an error message
    if(error) return <h4>Error Loading Message...</h4>

    return (
        <div>
            {console.log(data)}
            <h4>Data Loaded</h4>
        </div>
    );
}

export default Home;