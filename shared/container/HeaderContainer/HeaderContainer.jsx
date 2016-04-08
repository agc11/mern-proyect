import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';
import Header from '../../components/Header.jsx';

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapActionsToProps(dispatch) {
  return {
    SearchTheme: (newTheme, user) => dispatch(Actions.changeNewTheme(newTheme, user)),
    LogOut: () => dispatch(Actions.logOutRequest())
  };
}

export default connect(mapStateToProps, mapActionsToProps)(Header);
