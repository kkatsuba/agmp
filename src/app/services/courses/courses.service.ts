import { Injectable } from '@angular/core';
import courses from '../../data/courses.json';
import { Course } from '../../models/course';
import { deserialize } from 'serializer.ts/Serializer';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: Course[];

  getList() {
    this.courses = deserialize<Course[]>(Course, courses)
    return this.courses;
  }

  createCourse(course: Course) {
    this.courses.push(course);
  }

  getById(id: number) {
    return this.courses.find(item => item.id === id);
  }

  // update(id: number, value: Course) {}

  remove(id: number) {
    this.courses = this.courses.reduce((curr: Course[], course: Course) => {
      if (course.id === id) {
        return curr;
      }
      return [...curr, course];
    }, []);

    return this.courses;
  }
}
