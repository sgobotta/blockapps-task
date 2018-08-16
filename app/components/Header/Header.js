import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <a href="https://twitter.com/flexdinesh">
        </a>
        <div className="nav-bar">
          <Link className="router-link" to="/">
            Home
          </Link>
          <Link className="router-link" to="/features">
            Features
          </Link>
          <Link className="router-link" to="/sw-info">
            Sw Info
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
