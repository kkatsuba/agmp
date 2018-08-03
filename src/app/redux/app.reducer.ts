import { ActionReducerMap } from '@ngrx/store';
import { AuthorizationReducer } from './authorization/authorization.reducer';
import { AppState } from './app.state';
import { CoursesReducer } from './courses/courses.reducer';

export const rootReducer: ActionReducerMap<AppState> = {
  auth: AuthorizationReducer,
  courses: CoursesReducer
};
