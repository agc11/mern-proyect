import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import lists from './listsReducer';

export default combineReducers({
  lists,
  router
});
