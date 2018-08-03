import { Component } from '@angular/core';
import { Course } from '../../../models/course';
import { CoursesService } from '../../../services/courses/courses.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-course-page',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent {
  fetching = false;
  course: Course;
  courseForm: FormGroup;

  constructor(
    private coursesService: CoursesService,
    private router: Router
  ) {}

  saveCourse(course: Course) {
    this.fetching = true;
    this.coursesService.createCourse(course).subscribe(() => {
      this.cancel();
    }, () => {
      this.fetching = false;
    });
  }

  cancel() {
    this.router.navigate(['/courses']);
  }
}
