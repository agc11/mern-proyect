import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';
import Header from '../../components/Header.jsx';

function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}

function mapActionsToProps(dispatch) {
  return {
    SearchTheme: (newTheme) => dispatch(Actions.changeNewTheme(newTheme))
  };
}

export default connect(mapStateToProps, mapActionsToProps)(Header);
