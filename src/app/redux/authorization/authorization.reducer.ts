import { SIGN_IN, LOG_OFF, SignInAction } from './authorization.actions';
import { AuthorizationState } from './authorization.state';
import { Reducer, Action } from 'redux';

const initialState: AuthorizationState = {
  email: null,
  validated: false
};

export const AuthorizationReducer: Reducer<AuthorizationState> = (
  state: AuthorizationState = initialState,
  action: Action
): AuthorizationState => {
  switch (action.type) {
    case SIGN_IN:
      return {
        validated: true,
        email: (<SignInAction>action).email
      };
    case LOG_OFF: {
      return {
        validated: false,
        email: null
      };
    }
    default:
      return state;
  }
};
