import { ICourse } from '../../models/course';

export interface CoursesState {
  courses: Array<ICourse>;
  page: number;
  isFetching: boolean;
  isEnd: boolean;
}
