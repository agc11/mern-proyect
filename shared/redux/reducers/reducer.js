import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import articles from './articlesReducer';

export default combineReducers({
  articles,
  router
});
