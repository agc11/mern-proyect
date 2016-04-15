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
      <div className="login-register">
        <div className="form-group inner-addon left-addon">
          <label htmlFor="username">User name</label>
          <div className="inner-addon left-addon">
            <i className="glyphicon glyphicon-user"></i>
            <input ref="username" type="text" className="form-control" name="username" id="username" placeholder="User name" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="inner-addon left-addon">
            <i className="glyphicon glyphicon glyphicon-lock"></i>
            <input ref="password" type="password" className="form-control" name="password" id="password" placeholder="Password" />
          </div>
        </div>
        <button onClick={() => this.submitUser()} className="btn btn-success default btn-block login-button">Login</button>
        <Link to='/register' className="no-link-css">
          <button className="btn btn-default default btn-block">Register</button>
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};
