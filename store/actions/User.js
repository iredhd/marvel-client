import { ActionTypes } from '.';
import { Auth } from '../../services';

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

export const logout = () => async dispatch => {
  await Auth.clearToken();
  dispatch(clearData());
};
