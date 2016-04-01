import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import articles from './articlesReducer';
import user from './userReducer';

export default combineReducers({
  articles,
  user,
  router
});
