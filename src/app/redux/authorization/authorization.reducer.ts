import { SIGN_IN, LOG_OFF, ISignInAction } from './authorization.actions';
import { AuthorizationState } from './authorization.state';
import { ActionReducer, Action } from '@ngrx/store';

const initialState: AuthorizationState = {
  email: null,
  validated: false
};

export const AuthorizationReducer: ActionReducer<AuthorizationState> = (
  state: AuthorizationState = initialState,
  action: Action
): AuthorizationState => {
  switch (action.type) {
    case SIGN_IN:
      return {
        validated: true,
        email: (<ISignInAction>action).email
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
