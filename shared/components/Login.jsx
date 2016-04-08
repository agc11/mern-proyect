import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

export default class Login extends Component {

  constructor(props, context) {
    super(props, context);
  }

  clearInputs() {
    this.refs.username.value = '';
    this.refs.password.value = '';
  }

  submitUser(){
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    this.clearInputs();
    this.props.login(username, password);
  }

  render() {
    return(
      <div>
        <div className="form-group">
          <label htmlFor="username">User name</label>
          <input ref="username" type="text" className="form-control" name="username" id="username" placeholder="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input ref="password" type="password" className="form-control" name="password" id="password" placeholder="Password" />
        </div>
        <button onClick={() => this.submitUser()} className="btn btn-default">Submit</button>
        <Link to='/register'>Register</Link>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};
