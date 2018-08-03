import { AuthorizationState } from './authorization/authorization.state';
import { CoursesState } from './courses/courses.state';

export interface AppState {
  auth: AuthorizationState;
  courses: CoursesState;
}
