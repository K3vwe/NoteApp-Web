import React from 'react';

// import the required libraries to query server
import { useQuery, gql } from '@apollo/client';

import NoteFeed from '../components/NoteFeed';
import Button from '../components/Button';

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
    const { loading, error, data, fetchMore } = useQuery(GET_NOTES);

    // if data is loading, return a loading message
    if(loading) return <h4>Data Loading...</h4>

    // if error occurs while loading data, output an error message
    if(error) return <h4>Error Loading Message...</h4>

    return (
        <div>
            <NoteFeed notes={data.noteFeed.notes} />
            {/* only display the load more button if hasNextPage is true */}
            {data.noteFeed.hasNextPage && (
                <Button
                    onClick={ () => fetchMore({
                        variables: {
                            cursor: data.noteFeed.cursor
                        },
                        updateQuery: (previousResult, { fetchMoreResult }) => {
                            return {
                                noteFeed:{
                                    cursor: fetchMoreResult.noteFeed.cursor,
                                    hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
                                    // combine the new and the old result
                                    notes: [
                                        ...previousResult.noteFeed.notes,
                                        ...fetchMoreResult.noteFeed.notes
                                    ],
                                __typename: 'noteFeed'
                                }
                            };
                        }
                    })}
                >Load More</Button>
            )}
        </div>
    );
}

export default Home;