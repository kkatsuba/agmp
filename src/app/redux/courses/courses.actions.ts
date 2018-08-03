import { Action } from '@ngrx/store';
import { ICourse } from '../../models/course';

export enum CoursesActionTypes {
  LOADED = '[Courses] LOADED',
  LOADING = '[Courses] LOADING',
  CREATE = '[Courses] CREATE',
  UPDATE = '[Courses] UPDATE',
  DELETE = '[Courses] DELETE',
  SEARCH = '[Courses] SEARCH',
  RESET = '[Courses] RESET'
}

export class CoursesLoaded implements Action {
  readonly type = CoursesActionTypes.LOADED;

  constructor(public payload: ICourse[]) {}
}

export class Reset implements Action {
  readonly type = CoursesActionTypes.RESET;
}

export class LoadingCourses implements Action {
  readonly type = CoursesActionTypes.LOADING;
}

export class CreateCourse implements Action {
  readonly type = CoursesActionTypes.CREATE;

  constructor(public payload: ICourse) {}
}

export class UpdateCourse implements Action {
  readonly type = CoursesActionTypes.UPDATE;

  constructor(public payload: ICourse) {}
}

export class DeleteCourse implements Action {
  readonly type = CoursesActionTypes.DELETE;

  constructor(public payload: number) {}
}

export class SearchCourses implements Action {
  readonly type = CoursesActionTypes.SEARCH;

  constructor(public payload: ICourse[]) {}
}

export type CourseActions =
  | CoursesLoaded
  | Reset
  | LoadingCourses
  | CreateCourse
  | UpdateCourse
  | DeleteCourse
  | SearchCourses;
