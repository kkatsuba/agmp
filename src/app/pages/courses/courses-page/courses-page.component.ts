import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../../../models/course';
import { CoursesService } from '../../../services/courses/courses.service';
import { CourseItemDeleteDialogComponent } from '../../../components/course-item-delete-dialog/course-item-delete-dialog.component';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesPageComponent implements OnInit {
  courses$: Observable<Course[]>;
  search = '';

  constructor(
    private coursesService: CoursesService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.courses$ = this.coursesService.getList();
  }

  deleteCourse(course: Course) {
    const dialogRef = this.dialog.open(CourseItemDeleteDialogComponent, {
      width: '400px',
      data: { name: course.title, id: course.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.coursesService.remove(course.id);
      }
    });
  }
}
