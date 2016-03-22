import * as ActionTypes from '../constants/constants';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.SET_ARTICLES:
      return action.articles.slice();
    case ActionTypes.ADD_ARTICLE:
      return state.concat(action.article);
    default:
      return state;
  }
};

export default reducer;
