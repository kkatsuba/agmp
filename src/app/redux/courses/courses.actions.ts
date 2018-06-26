import { Action, ActionCreator } from 'redux';
import { ICourse } from '../../models/course';

export const FETCH_COURSES = 'FETCH_COURSES';
export const fetchCourses: ActionCreator<Action> = () => ({
  type: FETCH_COURSES
});

export const LOAD_COURSES = 'LOAD_COURSES';
export interface LoadCoursesAction extends Action {
  courses: Array<ICourse>;
  isEnd: boolean;
  page: number;
}
export const loadCourses: ActionCreator<LoadCoursesAction> = (
  courses: Array<ICourse>,
  isEnd: boolean,
  page: number
) => ({
  type: LOAD_COURSES,
  courses,
  isEnd,
  page
});

export const DELETE_COURSE = 'DELETE_COURSE';
export interface DeleteCourseAction extends Action {
  courseId: string;
}
export const deleteCourse: ActionCreator<DeleteCourseAction> = (
  courseId: string
) => ({
  type: DELETE_COURSE,
  courseId
});
