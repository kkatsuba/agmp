import { Action, ActionCreator } from 'redux';

export const SIGN_IN = 'SIGN_IN';
export interface SignInAction extends Action {
  email: string;
  password: string;
}
export const signIn: ActionCreator<SignInAction> = (email: string, password: string) => ({
  type: SIGN_IN,
  email,
  password
});

export const LOG_OFF = 'LOG_OFF';
export const logOff: ActionCreator<Action> = () => ({
  type: LOG_OFF
});
