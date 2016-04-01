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
      <div>
        <div className="form-group">
          <label htmlFor="username">User name</label>
          <input ref="username" type="text" className="form-control" name="username" id="username" placeholder="username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input ref="email" type="text" className="form-control" name="email" id="email" placeholder="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input ref="password" type="password" className="form-control" name="password" id="password" placeholder="Password" />
        </div>
        <button onClick={() => this.submitUser()} className="btn btn-default">Submit</button>
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
