import React, { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase";
import FormInputComponent from "../formInput/formInputComponent";
import ButtonComponent from "../button/buttonComponent";
import "./signUpStyles.scss";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

function SignUpFormComponent() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            console.log(`User created: ${user.email}`);
            resetFormFields();
        } catch (error) {
            handleAuthError(error);
        }
    };

    const handleAuthError = (error) => {
        switch (error.code) {
            case 'auth/email-already-in-use':
                alert('This email is already in use');
                break;
            case 'auth/invalid-email':
                alert('Invalid email address');
                break;
            case 'auth/weak-password':
                alert('Password should be at least 6 characters');
                break;
            default:
                alert('An error occurred: ' + error.message);
                break;
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-up-container">
            <h2>Dont have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInputComponent 
                   label="Display Name" 
                   type="text" 
                   required
                   onChange={handleChange} 
                   name="displayName" 
                   value={displayName} />
                <FormInputComponent 
                   label="Email" 
                   type="email" 
                   required 
                   onChange={handleChange} 
                   name="email" 
                   value={email} />
                <FormInputComponent 
                   label="Password" 
                   type="password" 
                   required 
                   onChange={handleChange} 
                   name="password" 
                   value={password} />
                <FormInputComponent 
                   label="Confirm Password" 
                   type="password" 
                   required 
                   onChange={handleChange} 
                   name="confirmPassword"
                   value={confirmPassword} />
                <ButtonComponent buttonType="google" type="submit">Sign Up</ButtonComponent>
            </form>
        </div>
    );
}

export default SignUpFormComponent;
