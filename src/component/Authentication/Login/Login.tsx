import React from "react";
import "./Login.css"
import {useHistory} from "react-router";
const Login = () => {
  const history = useHistory();
  const signUp = () => {
    history.push("/register")
  }

  return(
    <div className="bodys-style">

      <div className="container" id="container">
        <div className="form-container sign-up-container">
        </div>
        <div className="form-container sign-in-container">
          <form action="#" className="form-style">
            <h1>Sign in</h1>

            <span>or use your account</span>
            <input type="email" placeholder="Email"/>
            <br/>
            <input type="password" placeholder="Password"/>

            <a href="#" className="a-style">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hey, Buddy!</h1>
              <p>Join with us and start a journey of a new beginning </p>
              <button className="ghost" id="signUp" onClick={signUp}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Login
