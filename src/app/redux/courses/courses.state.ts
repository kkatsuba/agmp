import { List } from 'immutable';
import { ICourse } from '../../models/course';

export interface CoursesState {
  isFetching: boolean;
  courses: List<ICourse>;
  page: number;
  limit: number;
}
