import * as ActionTypes from '../constants/constants';

const reducer = (state = {user: null, token: null}, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return Object.assign({}, state, {user: action.user, token: action.token});
    default:
      return state;
  }
};

export default reducer;
