/* 
    info gotten from:
    https://www.apollographql.com/docs/tutorial/local-state/#initialize-reactive-variables
    https://levelup.gitconnected.com/storing-local-data-with-apollo-client-dffc304efdfc#c0dc 
*/
import { InMemoryCache, makeVar } from '@apollo/client';

export const isLoggedInVar = makeVar(!!localStorage.getItem('token'));

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                isLoggedIn: {
                    read() {
                        return isLoggedInVar();
                    },
                },
            },
        },
    },
})