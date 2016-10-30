import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navbar extends Component {
  render() {
    return (
      <div className="container text-center navigation">
        <ul>
          <li className="logo"><Link to="/">HYPERBOWL</Link></li>
          <li><Link to="/team">TEAM</Link></li>
          <li><Link to="/code">CODE</Link></li>
          <li><Link to="/login">LOGIN</Link></li>
        </ul>
      </div>
    );
  }
}