import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';
import Login from '../../components/Login';

class LoginContainer extends Component {

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
        <Login login={this.props.login} />
      </div>
    );
  }
}

LoginContainer.propTypes = {
  login: PropTypes.func.isRequired,
};


function mapStateToProps(state) {
  return {
  };
}

function mapActionsToProps(dispatch) {
  return {
    login: (username, password) => dispatch(Actions.login(username, password)),
  };
}


export default connect(mapStateToProps, mapActionsToProps)(LoginContainer);
