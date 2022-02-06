import React, { useState } from 'react';
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

const UserForm = props => {

    // Set the default state of the form
    const [values, setValues] = useState();

    // update the state when a user types into the form
    const onChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }

    return(
        <Wrapper>
            {/* Display the appropriate header */}
            {props.formType === 'signup'? <h2>Create an account</h2> : <h2>Sign In</h2>}
            <Form onSubmit={ event => {
                event.preventDefault();
                // pass the form data to the mutation hook when user submits the form
                /* perform the mutation when a user submits the form */
                props.action({
                    variables: {
                        ...values
                    }
                });
            }}>
                {props.formType === 'signup' && (
                    <React.Fragment>
                        <label htmlFor='email'>Email: </label>
                        <input
                            required
                            type="email"
                            id='email'
                            placeholder='email'
                            name='email'
                            onChange={onChange} />
                    </React.Fragment>
                )}

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


export default UserForm;