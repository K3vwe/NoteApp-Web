import React, { useEffect, useState } from 'react';
import { useMutation, useApolloClient, gql } from '@apollo/client';
import styled from 'styled-components';
import Button from '../components/Button';

const Wrapper = styled.div`  
    border: 1px solid #f5f4f0;  
    max-width: 500px;  
    padding: 1em;  
    margin: 0 auto; 
`;

const Form = styled.form`
    label,  input {    
        display: block;    
        line-height: 2em;  
    } 
    input {    
        width: 100%;    
        margin-bottom: 1em;  
    } 
`;

const SIGNUP_USER = gql`
    mutation($email: String!, $username: String!, $password: String!) {
        signUp(email: $email, username: $username, password: $password)
    }
`;

function SignUp(){

    useEffect( () => {
        // Change the title of the page
        document.title = 'signUp _ NoteApp'
    });

    // Set the default state of the form
    const [values, setValues] = useState();

    // update the state when a user types into the form
    const onChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }

    // Mutation Hook
    const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
        onCompleted: data => {
            // store the returned JWT in localStorage
            localStorage.setItem('token', data.signUp);
        }
    })

    return(
        <Wrapper>
            <h2>Create an account</h2>
            <Form onSubmit={ event => {
                event.preventDefault();
                // pass the form data to the mutation hook when user submits the form
                signUp({
                    variables: {
                        ...values
                    }
                });
            }}>
                <div>
                    <label htmlFor='email'>Email: </label>
                    <input
                        required
                        type="email"
                        id='email'
                        placeholder='email'
                        name='email'
                        onChange={onChange} />
                </div>
                <div>
                    <label htmlFor='username'>Username: </label>
                    <input
                        required
                        type="text"
                        id='username'
                        placeholder='username'
                        name='username'
                        onChange={onChange} />
                </div>
                <div>
                    <label htmlFor='password'>Password: </label>
                    <input
                        required
                        type="password"
                        id='password'
                        placeholder='password'
                        name='password'
                        onChange={onChange} />
                </div>
                <Button type='submit'>submit</Button>
            </Form>
        </Wrapper>
    );
}

export default SignUp;