import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Course } from '../../../models/course';
import { CoursesService } from '../../../services/courses/courses.service';
import { BreadcrumbsService } from '../../../services/breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-edit-course-page',
  templateUrl: './edit-course-page.component.html',
  styleUrls: ['./edit-course-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditCoursePageComponent implements OnInit {
  course: Course;
  courseForm: FormGroup;
  fetching = false;

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private router: Router,
    private breadcrumbsService: BreadcrumbsService,
    private chandeDetect: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('id');

    this.coursesService.getById(id).subscribe(course => {
      this.course = course;
      this.chandeDetect.detectChanges();

      this.breadcrumbsService.changeBreadcrum(this.route.parent.routeConfig.path, this.course.title);
    });
  }

  saveCourse(course: Course) {
    this.fetching = true;
    this.coursesService.update(course).subscribe(() => {
      this.cancel();
    }, () => {
      this.fetching = false;
    });
  }

  cancel() {
    this.router.navigate(['/courses']);
  }
}
