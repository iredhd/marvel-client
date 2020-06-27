import { ActionTypes } from '../actions';

const initialState = {
  name: null,
  email: null,
  user: null,
  heroId: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REGISTER_USER:
      return {
        ...initialState,
        name: action.payload.name,
        email: action.payload.email,
        user: action.payload.user,
        heroId: action.payload.heroId,
      };
    case ActionTypes.CLEAR_USER:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;
