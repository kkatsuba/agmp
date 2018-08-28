import { Injectable } from '@angular/core';
import { Course } from '../../models/course';
import { deserialize } from 'serializer.ts/Serializer';
import { HttpClient } from '@angular/common/http';
import { AppState } from '../../redux/app.state';
import { State, Store } from '@ngrx/store';
import {
  CoursesLoaded,
  UpdateCourse,
  LoadingCourses,
  CreateCourse,
  SearchCourses,
  Reset
} from '../../redux/courses/courses.actions';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IAuthor } from '../../models/author';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
    private state: State<AppState>
  ) {}

  loadNext(reset?: boolean) {
    if (reset) {
      this.reset();
    }

    const page = this.state.value.courses.page;
    const limit = this.state.value.courses.limit;
    const params = {
      start: `${page * limit}`,
      count: limit + ''
    };

    this.store.dispatch(new LoadingCourses());
    this.http.get<Course[]>('/api/courses', { params }).subscribe(courses => {
      courses = deserialize<Course[]>(Course, courses);
      this.store.dispatch(new CoursesLoaded(courses));
    });
  }

  reset() {
    this.store.dispatch(new Reset());
  }

  createCourse(value: Course) {
    return this.http.post<Course>(`/api/courses`, value).pipe(
      map(course => {
        course = deserialize<Course>(Course, course);
        this.store.dispatch(new CreateCourse(course));
      })
    );
  }

  getById(id: number) {
    return this.http
      .get<Course>(`/api/courses/${id}`)
      .pipe(map(course => deserialize<Course>(Course, course)));
  }

  update(value: Course) {
    return this.http.put<Course>(`/api/courses/${value.id}`, value).pipe(
      map(course => {
        course = deserialize<Course>(Course, course);
        this.store.dispatch(new UpdateCourse(course));
        return course;
      })
    );
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`/api/courses/${id}`).pipe(
      tap(() => {
        this.reset();
        this.loadNext();
      })
    );
  }

  search(value: string) {
    const params = { textFragment: value };
    this.http.get<Course[]>(`/api/courses`, { params }).subscribe(courses => {
      courses = deserialize<Course[]>(Course, courses);
      this.store.dispatch(new SearchCourses(courses));
    });
  }

  loadAuthors() {
    return this.http.get<IAuthor[]>(`/api/authors`);
  }
}
