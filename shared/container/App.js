import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions/actions';
import HeaderContainer from './HeaderContainer/HeaderContainer.jsx';

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        { this.props.children }
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default connect()(App);
