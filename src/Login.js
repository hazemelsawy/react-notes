import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import { Link } from 'react-router-dom';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="registerContainer">
      <h1>Log in</h1>
      <form className="login" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input name="email" type="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input name="password" type="password" placeholder="Password" />
        </div>
        <div className="form-group">

          <button className="btn btn-light" type="submit">Log in</button>
        </div>
        <div className="form-group">

          <Link to="/signup"><button className="btn btn-dark" type="submit">Sign up</button></Link>
        </div>
      </form>
    </div>
  );
};

export default withRouter(Login);