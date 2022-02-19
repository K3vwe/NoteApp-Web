import React, { useEffect, useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { isLoggedInVar } from '../cache';
import { useNavigate } from 'react-router-dom';

import UserForm from '../components/UserForm';
import { SIGNUP_USER } from '../gql/mutation';

function SignUp(){

    useEffect( () => {
        // Change the title of the page
        document.title = 'signUp _ NoteApp'
    });

    const navigate = useNavigate();

    // Mutation Hook
    const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
        onCompleted: data => {
            // store the returned JWT in localStorage
            localStorage.setItem('token', data.signUp);
            // Write to the cache to store isLoggedIn as true
            isLoggedInVar(true);
            // Redirect user to HomePage after signUp process completes
            navigate("/");
        }
    });

    return(
        <React.Fragment>
            <UserForm action={signUp} formType={'signup'}/>
            {/* if data is loading, display the loading message */}
            {loading && <h4>Loading...</h4>}
            {/* if error occurs */}
            {error && <h4>Error creating account</h4>}
        </React.Fragment>
    );
}

export default SignUp;