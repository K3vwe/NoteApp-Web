import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import ButtonAsLink from './ButtonAsLink';
import { TOGGLE_FAVORITE } from '../gql/mutation';
import { GET_MY_FAVORITES } from '../gql/query';

const FavoriteNote = props => {
        // toggleFavorites mutation hook
    const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
        variables: {
            id: props.noteId
        },
        // refetch the GET_MY_FAVORITES query to update the cache
        refetchQueries: [{query: GET_MY_FAVORITES}]
    })

    return(
        <React.Fragment>
            {favorited ? (
                <ButtonAsLink
                onClick={ () => {
                    toggleFavorite();
                }}>
                    Remove favorite
                </ButtonAsLink>
            ) : (
                <ButtonAsLink
                onClick={ () => {
                    toggleFavorite()
                }}>
                    Add favorite
                </ButtonAsLink>
            )} : {props.favoriteCount}
        </React.Fragment>
    );
}

export default FavoriteNote;