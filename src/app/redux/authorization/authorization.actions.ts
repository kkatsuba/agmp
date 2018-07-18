import { Action } from '@ngrx/store';

export const SIGN_IN = '[Auth] SIGN_IN';
export const LOG_OFF = '[Auth] LOG_OFF';

export interface ISignInAction extends Action {
  type: string;
  email: string;
}
export const signIn = (email: string) => ({
  type: SIGN_IN,
  email
});

export const logOff: Action = {
  type: LOG_OFF
};
