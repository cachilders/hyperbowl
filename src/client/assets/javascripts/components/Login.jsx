import React, { Component } from 'react';
// import { Link } from 'react-router';

import { Modal } from 'react-bootstrap';

class Login extends Component {
	constructor(props) {
    super(props);
    this.state = { showModal: false, loggedIn: false };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
	}

	open() {
		console.log("inside open")
		this.setState({ showModal: true });
	}

	close() {
		this.setState({ showModal: false });
	}

  render() {
  	console.log(Modal)
    return (
      <span className="container text-center">
        <span onClick={this.open}>LOGIN</span>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.header>HYPERBOWL</Modal.header>
          <Modal.body>
            Sign in with Github
          </Modal.body>
        </Modal>
      </span>
    );
  }
};

export default Login;
