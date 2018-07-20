import { Component, OnInit } from '@angular/core';
import { Course } from '../../../models/course';
import { CoursesService } from '../../../services/courses/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-course-page',
  templateUrl: './edit-course-page.component.html',
  styleUrls: ['./edit-course-page.component.css']
})
export class EditCoursePageComponent implements OnInit {
  course: Course;
  courseForm: FormGroup;

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.course = this.coursesService.getById(id);
  }

  saveCourse(course: Course) {
    this.coursesService.update(course);
    this.cancel();
  }

  cancel() {
    this.router.navigate(['/courses']);
  }
}
