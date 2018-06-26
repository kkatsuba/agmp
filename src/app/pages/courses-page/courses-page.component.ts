import { Component, OnInit } from '@angular/core';
import { deserialize } from 'serializer.ts/Serializer';
import { ICourse, Course } from '../../models/course';
import * as courses2 from '../../data/courses.json';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {
  courses: Array<ICourse>;

  constructor() {
    this.courses = new Array<ICourse>();
  }

  ngOnInit() {
    this.courses = deserialize<Course[]>(Course, courses2.default);
  }

  deleteCourse(courseId: number) {
    console.log(courseId);
    this.courses = this.courses.filter(({ id }) => courseId !== id);
  }
}
