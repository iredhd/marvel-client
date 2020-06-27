import { ActionTypes } from '.';

export const login = user => dispatch => {
  dispatch(storeData(user));
};

export const storeData = (payload) => {
  return ({
    type: ActionTypes.REGISTER_USER,
    payload
  });
};

export const clearData = () => {
  return ({
    type: ActionTypes.CLEAR_USER
  });
};
