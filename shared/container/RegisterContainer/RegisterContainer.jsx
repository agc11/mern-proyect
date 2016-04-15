import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';


class RegisterContainer extends Component {

  constructor(props, context) {
    super(props, context);
  }

  clearInputs() {
    this.refs.username.value = '';
    this.refs.password.value = '';
    this.refs.email.value = '';
  }

  submitUser(){
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    const email = this.refs.email.value;
    this.clearInputs();
    this.props.register(username, password, email);
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
          <label htmlFor="email">Email</label>
          <div className="inner-addon left-addon">
            <i className="glyphicon glyphicon-envelope"></i>
            <input ref="email" type="text" className="form-control" name="email" id="email" placeholder="Email" />
          </div>
      </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="inner-addon left-addon">
            <i className="glyphicon glyphicon glyphicon-lock"></i>
            <input ref="password" type="password" className="form-control" name="password" id="password" placeholder="Password" />
          </div>
        </div>
        <button onClick={() => this.submitUser()} className="btn btn-success default btn-block login-button">Register</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}

function mapActionsToProps(dispatch) {
  return {
    register: (username, password, email) => Actions.register(username, password, email),
  };
}

RegisterContainer.propTypes = {
  articles: PropTypes.array.isRequired,
  register: PropTypes.func.isRequired,
};

RegisterContainer.defaultProps = {
  articles: []
};

export default connect(mapStateToProps, mapActionsToProps)(RegisterContainer);
