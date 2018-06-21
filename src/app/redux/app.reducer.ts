import { Reducer, combineReducers } from 'redux';
import { AuthorizationReducer } from './authorization/authorization.reducer';
import { AppState } from './app.state';

export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  auth: AuthorizationReducer
});
