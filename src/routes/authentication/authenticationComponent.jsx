import SignUpForm from "../../components/signUpForm/signUpFormComponent";
import SignInForm from "../../components/signInForm/signInFormComponent";
import "./authenticationStyles.scss"
function Authentication() {
  return (
    <div className="authentication-container ">
      <SignInForm/>
      <SignUpForm />
    </div>

  )
}

export default Authentication