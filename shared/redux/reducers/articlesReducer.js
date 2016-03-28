import * as ActionTypes from '../constants/constants';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.SET_ARTICLES:
      return action.articles.slice();
    case ActionTypes.ADD_ARTICLE:
      return [action.article].concat(state);
    case ActionTypes.REMOVE_ARTICLE:
      return state.filter(article => article._id !== action.article._id);
    default:
      return state;
  }
};

export default reducer;
