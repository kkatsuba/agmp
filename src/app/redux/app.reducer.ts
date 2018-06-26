import { Reducer, combineReducers } from 'redux';
import { AuthorizationReducer } from './authorization/authorization.reducer';
import { AppState } from './app.state';
import { CoursesReducer } from './courses/courses.reducer';

export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  auth: AuthorizationReducer,
  courses: CoursesReducer
});
