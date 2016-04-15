import * as ActionTypes from '../constants/constants';

function voteArticle(state, article) {
  return state.map((a, index) => a._id === article._id ? article : a);
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.SET_ARTICLES:
      return action.articles.slice();
    case ActionTypes.ADD_ARTICLE:
      return [action.article].concat(state);
    case ActionTypes.REMOVE_ARTICLE:
      return state.filter(article => article._id !== action.article._id);
    case ActionTypes.VOTE_ARTICLE:
      return voteArticle(state, action.article);
    default:
      return state;
  }
};

export default reducer;
