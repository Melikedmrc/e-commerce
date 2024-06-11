// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import {
  // auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  // signInWithGoogleRedirect,
} from "../../utils/firebase/firebase";
import SignUpForm from "../../components/signUpForm/signUpFormComponent";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase";

function SignIn() {

  // useEffect(() => async()=> {
  //   const response=await getRedirectResult(auth)
  //   if(response){
  //     const userDocRef=await createUserDocumentFromAuth(response.user)
  //     console.log(userDocRef)
  //   }
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);

  };
  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   console.log({user});
  // };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign in with Google Popup
      </button>
      {/* <button onClick={logGoogleRedirectUser}>
        Sign in with Google Redirect
      </button> */}
      <SignUpForm />
    </div>

  )
}

export default SignIn