import * as ActionTypes from '../constants/constants';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.SET_LISTS:
      return action.lists.slice();
    case ActionTypes.ADD_LIST:
      return state.concat(action.list);
    default:
      return state;
  }
};

export default reducer;
