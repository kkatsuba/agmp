import { Component, OnInit } from '@angular/core';
import { ICourse, Course } from '../../models/course';
import { OrderByPipe } from '../../pipes/order-by/order-by.pipe';
import { CoursesService } from '../../services/courses/courses.service';
import { CourseItemDeleteDialogComponent } from '../../components/course-item-delete-dialog/course-item-delete-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css'],
  providers: [OrderByPipe]
})
export class CoursesPageComponent implements OnInit {
  courses: Array<ICourse>;
  search = '';

  constructor(
    private orderByPipe: OrderByPipe,
    private coursesService: CoursesService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.courses = this.coursesService.getList();
    this.courses = this.orderByPipe.transform(this.courses, 'createdDate');
  }

  deleteCourse(course: Course) {
    const dialogRef = this.dialog.open(CourseItemDeleteDialogComponent, {
      width: '400px',
      data: { name: course.title, id: course.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.courses = this.coursesService.remove(course.id);
      }
    });
  }
}
