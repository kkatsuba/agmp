import { SIGN_IN, LOG_OFF, ISignInAction, LOGIN_ERROR, ILoginErrorAction } from './authorization.actions';
import { AuthorizationState } from './authorization.state';
import { Action } from '@ngrx/store';

const initialState: AuthorizationState = {
  email: null,
  token: null,
  loginError: null
};

export function AuthorizationReducer(state: AuthorizationState = initialState, action: Action): AuthorizationState {
  switch (action.type) {
    case SIGN_IN:
      return {
        email: (<ISignInAction>action).email,
        token: (<ISignInAction>action).token,
        loginError: null
      };
    case LOG_OFF:
      return initialState;
    case LOGIN_ERROR:
      return {
        ...initialState,
        loginError: (<ILoginErrorAction>action).error
      };
    default:
      return state;
  }
}
