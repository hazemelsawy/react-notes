import React from 'react';
import app from "./../base";

const Header = props => (
  <header className="header">
    <button className="signOut" onClick={() => app.auth().signOut()}>Sign out</button>
    <h3 className="title">React<span>x</span>Firebase</h3>
  </header>
);

export default Header;