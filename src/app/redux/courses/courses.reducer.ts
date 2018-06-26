import { LOAD_COURSES, LoadCoursesAction, FETCH_COURSES, DELETE_COURSE, DeleteCourseAction } from './courses.actions';
import { CoursesState } from './courses.state';
import { Reducer, Action } from 'redux';

const initialState: CoursesState = {
  courses: [],
  isFetching: false,
  isEnd: false,
  page: 0
};

export const CoursesReducer: Reducer<CoursesState> = (
  state: CoursesState = initialState,
  action: Action
): CoursesState => {
  switch (action.type) {
    case LOAD_COURSES:
      const courseAction = <LoadCoursesAction>action;
      return {
        isFetching: false,
        isEnd: courseAction.isEnd,
        courses: [...state.courses, ...courseAction.courses],
        page: courseAction.page
      };
    case FETCH_COURSES:
      return {
        ...state,
        isFetching: true
      };
    case DELETE_COURSE:
      const courseId = (<DeleteCourseAction>action).courseId;
      return {
        ...state,
        courses: state.courses.filter(course => course.id !== courseId)
      }
    default:
      return state;
  }
};
