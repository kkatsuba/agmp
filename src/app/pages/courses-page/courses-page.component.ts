import { Component } from '@angular/core';
import { ICourse, Course } from '../../models/course';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent {
  courses: Array<ICourse> = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.courses.push(new Course(i, `Course ${i}`));
    }
  }

}
