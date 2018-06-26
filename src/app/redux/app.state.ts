import { AuthorizationState } from './authorization/authorization.state';

export interface AppState {
  auth: AuthorizationState;
}
