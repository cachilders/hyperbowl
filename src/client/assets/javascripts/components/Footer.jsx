import React, { Component } from 'react';

import logo from '../../images/tealhyperlogo.svg';

export default class Footer extends Component {
  render() {
    return (
      <div className="container text-center footer">
          © 2016 <a href="https://github.com/yougothack">You Got Hack</a><br />
          <img className="footer-logo" src={logo} />
      </div>
    );
  }
}
