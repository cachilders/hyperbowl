import React, { Component } from 'react';
import { Link } from 'react-router';

import logo from '../../images/tealhyperlogo.svg';
import Login from './Login';

export default class Navbar extends Component {
  render() {
    return (
      <div className="container text-center navigation">
        <img className="logo" src={logo} />
          <div className="nav-list">
            <li><Link to="/">HYPERBOWL</Link></li>
            <li><Link to="/team">TEAM</Link></li>
            <li><Link to="/code">CODE</Link></li>
            <li><Login /></li>
          </div>
      </div>
    );
  }
}