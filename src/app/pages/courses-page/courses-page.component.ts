import { Component } from '@angular/core';
import { deserialize } from 'serializer.ts/Serializer';
import { ICourse, Course } from '../../models/course';
import courses2 from '../../data/courses.json';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent {
  courses: Array<ICourse>;

  constructor() {
    this.courses = deserialize<Course[]>(Course, courses2);
  }

  deleteCourse(courseId: number) {
    console.log(courseId);
    this.courses = this.courses.filter(({ id }) => courseId !== id);
  }
}
