import { Injectable } from '@angular/core';
import courses from '../../data/courses.json';
import { Course } from '../../models/course';
import { deserialize } from 'serializer.ts/Serializer';
import { BehaviorSubject } from 'rxjs';
import { OrderByPipe } from '../../pipes/order-by/order-by.pipe';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private _courses = new BehaviorSubject<Course[]>([]);
  private courses$ = this._courses.asObservable();

  constructor(private orderByPipe: OrderByPipe) {
    this._courses.next(deserialize<Course[]>(Course, courses));
  }

  getList() {
    this._courses.next(
      this.orderByPipe.transform(
        this._courses.getValue(),
        'createdDate'
      )
    );
    return this.courses$;
  }

  createCourse(course: Course) {
    const newCourses = this._courses.getValue();
    course.id = newCourses.sort((a, b) => b.id - a.id)[0].id + 1;

    this._courses.next([...this._courses.getValue(), course]);
  }

  getById(id: number) {
    return this._courses.getValue().find(item => item.id === id);
  }

  update(value: Course) {
    const newCourses = this._courses.getValue().map(course => {
      if (course.id === value.id) {
        course = {
          ...course,
          ...value
        };
      }
      return course;
    });

    this._courses.next(newCourses);
  }

  remove(id: number) {
    const newCourses = this._courses
      .getValue()
      .reduce((curr: Course[], course: Course) => {
        if (course.id === id) {
          return curr;
        }
        return [...curr, course];
      }, []);

    this._courses.next(newCourses);
  }
}
