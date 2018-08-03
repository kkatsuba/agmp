import { Action } from '@ngrx/store';

export const SIGN_IN = '[Auth] SIGN_IN';
export const LOG_OFF = '[Auth] LOG_OFF';
export const LOGIN_ERROR = '[Auth] LOGIN_ERROR';

export interface ISignInAction extends Action {
  type: string;
  email: string;
  token: string;
}
export const signIn = (email: string, token: string) => ({
  type: SIGN_IN,
  email,
  token
});

export const logOff: Action = {
  type: LOG_OFF
};

export interface ILoginErrorAction extends Action {
  type: string;
  error: string;
}
export const loginError = (error: string) => ({
  type: LOGIN_ERROR,
  error
});
