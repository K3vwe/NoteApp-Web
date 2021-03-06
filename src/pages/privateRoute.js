import { Navigate, Outlet } from 'react-router-dom';
import {useQuery, gql } from '@apollo/client';
import { IS_LOGGED_IN } from '../gql/query';


const ProtectedRoute = () => {
    const { loading, error, data } = useQuery(IS_LOGGED_IN);

    // if loading, display loading message
    if (loading) <h4>Loading...</h4>

    // if error occurs 
    if (error) <h4>Error!</h4>

    // if user is loggedin, route them to the requested element
    // else redirect them to signin 
    return(
        data.isLoggedIn === true ? <Outlet /> : <Navigate to='./signin' />
    );
}

export default ProtectedRoute;