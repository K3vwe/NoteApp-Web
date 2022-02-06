import React, { useEffect } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router';
import UserForm from '../components/UserForm';

const SIGNIN_USER = gql`
    mutation($email: String, $password: String!) {
        signIn(email: $email, password: $password)
    }
`;

function SignIn() {
    
    useEffect( () => {
        // Change the title of the page
        document.title = 'Sign In - NoteApp';
    })

    const navigate = useNavigate();

    const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
        onCompleted: data => {
            // store the returned JWT in localStorage
            localStorage.setItem('token', data.signIp);
            // Write to the cache to store isLoggedIn as true
            isLoggedInVar(true);
            // Redirect user to HomePage after signUp process completes
            navigate("/");
        }
    })

    return(
        <React.Fragment>
            <UserForm action={signIn} formType={'signin'}/>
            {/* if data is loading, display the loading message */}
            {loading && <h4>Loading...</h4>}
            {/* if error occurs */}
            {error && <h4>Error signing in</h4>}
        </React.Fragment>
    );
}

export default SignIn;