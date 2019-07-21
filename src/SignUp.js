import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div className="registerContainer">
      <h1>Sign up</h1>
      <form className="register" onSubmit={handleSignUp}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input name="email" type="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input name="password" type="password" placeholder="Password" />
        </div>
        <div className="form-group">

          <button className="btn btn-light" type="submit">Sign up</button>
        </div>
        <div className="form-group">
        </div>
      </form>
    </div>
  );
};

export default withRouter(SignUp);