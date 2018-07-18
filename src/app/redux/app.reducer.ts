import { ActionReducerMap } from '@ngrx/store';
import { AuthorizationReducer } from './authorization/authorization.reducer';
import { AppState } from './app.state';

export const rootReducer: ActionReducerMap<AppState> = {
  auth: AuthorizationReducer
};
