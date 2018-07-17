import { Component, OnInit } from '@angular/core';
import { deserialize } from 'serializer.ts/Serializer';
import { ICourse, Course } from '../../models/course';
import courses2 from '../../data/courses.json';
import { OrderByPipe } from '../../pipes/order-by/order-by.pipe';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css'],
  providers: [ OrderByPipe ]
})
export class CoursesPageComponent implements OnInit {
  courses: Array<ICourse>;
  search = '';

  constructor(private orderByPipe: OrderByPipe) {
  }

  ngOnInit() {
    this.courses = deserialize<Course[]>(Course, courses2);
    this.courses = this.orderByPipe.transform(this.courses, 'createdDate');
  }

  deleteCourse(courseId: number) {
    this.courses = this.courses.filter(({ id }) => courseId !== id);
  }
}
