import { signInWithGooglePopup } from "../../utils/firebase/firebase";

function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  }
  return (
    <div>
      <h1>SignInComponent</h1>
      <button onClick={logGoogleUser}>
        Sign in with Google Popup
      </button>
    </div>

  )
}

export default SignIn