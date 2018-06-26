import { Injectable, Inject } from '@angular/core';
import { plainToClass } from 'class-transformer';
import { AppState } from '../../redux/app.state';
import { Store } from 'redux';
import { AppStore } from '../../redux/app.store';
import {
  loadCourses,
  fetchCourses,
  deleteCourse
} from '../../redux/courses/courses.actions';
import { CoursesResponse, Course } from '../../models/course';
import { ApiService } from '../api/api.service';
import { Service } from '@feathersjs/feathers';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private service: Service<any>;
  private readonly COUNT = 10;

  constructor(
    @Inject(AppStore) private store: Store<AppState>,
    private api: ApiService
  ) {
    this.service = this.api.service('courses');
  }

  loadNextCourses() {
    const { page, isFetching, isEnd } = this.store.getState().courses;
    if (isFetching || isEnd) {
      return;
    }

    const $skip = page * this.COUNT;
    const query = {
      $limit: this.COUNT,
      $skip
    };

    this.store.dispatch(fetchCourses());
    this.service
      .find({ query })
      .then((res: CoursesResponse) => ({
        ...res,
        data: plainToClass(Course, res.data as Object[])
      }))
      .then((coursesResponse: CoursesResponse) => {
        const nextPage = page + 1;
        const hasMore =
          nextPage === Math.ceil(coursesResponse.total / this.COUNT);
        this.store.dispatch(
          loadCourses(coursesResponse.data, hasMore, nextPage)
        );
      });
  }

  deleteCourse(id: string) {
    if (!id) {
      return;
    }

    this.service.remove(id).then(() => {
      this.store.dispatch(deleteCourse(id));
    });
  }

  searchCourses($search: string) {
    this.store.dispatch(fetchCourses());

    const query = {
      title: { $search }
    };

    this.service
      .find({ query })
      .then((res: CoursesResponse) => ({
        ...res,
        data: plainToClass(Course, res.data as Object[])
      }))
      .then((coursesResponse: CoursesResponse) => {
        this.store.dispatch(loadCourses(coursesResponse.data));
      });
  }
}
