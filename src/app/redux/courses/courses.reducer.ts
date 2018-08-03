import { List } from 'immutable';
import { CoursesState } from './courses.state';
import { CourseActions, CoursesActionTypes } from './courses.actions';

const initialState: CoursesState = {
  isFetching: false,
  courses: List(),
  page: 0,
  limit: 10
};

export function CoursesReducer(state: CoursesState = initialState, action: CourseActions): CoursesState {
  let courseInd;
  switch (action.type) {
    case CoursesActionTypes.LOADED:
      return {
        ...state,
        isFetching: false,
        page: state.page + 1,
        courses: List(state.courses.concat(action.payload))
      };
    case CoursesActionTypes.LOADING:
      return {
        ...state,
        isFetching: true
      };
    case CoursesActionTypes.CREATE:
      return {
        ...state,
        courses: state.courses.push(action.payload)
      };
    case CoursesActionTypes.UPDATE:
      courseInd = state.courses.findIndex(value => value.id === action.payload.id);
      if (courseInd < 0) {
        return state;
      }

      return {
        ...state,
        courses: state.courses.update(courseInd, () => action.payload)
      };
    case CoursesActionTypes.DELETE:
      courseInd = state.courses.findIndex(value => value.id === action.payload);
      if (courseInd < 0) {
        return state;
      }

      return {
        ...state,
        courses: state.courses.delete(courseInd)
      };
    case CoursesActionTypes.SEARCH:
      return {
        ...initialState,
        courses: List(action.payload)
      };
    case CoursesActionTypes.RESET:
      return initialState;
    default:
      return state;
  }
}
