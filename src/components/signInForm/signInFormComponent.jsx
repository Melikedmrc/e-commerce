import React, { useState } from 'react';
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";
import ButtonComponent from "../button/buttonComponent";
import FormInputComponent from "../formInput/formInputComponent";
import "./signInStyles.scss";

const defaultFormFields = {
    email: '',
    password: ''
};

function SignInFormComponent() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    console.log('Incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    console.log('No user associated with this email');
                    break;
                default:
                    console.log(error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInputComponent
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />
                <FormInputComponent
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />
                <div className='buttons-container'>
                    <ButtonComponent type='submit'>Sign In</ButtonComponent>
                    <ButtonComponent type='button' buttonType='google' onClick={signInWithGoogle}>
                        Google sign in
                    </ButtonComponent>
                </div>
            </form>
        </div>
    );
};

export default SignInFormComponent;
