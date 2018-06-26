import { Component, Input } from '@angular/core';
import { ICourse } from '../../models/course';
import { MatDialog } from '@angular/material';
import { CourseItemDeleteDialogComponent } from '../course-item-delete-dialog/course-item-delete-dialog.component';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent {
  @Input() course: ICourse;

  constructor(private dialog: MatDialog) { }

  remove() {
    console.log(this.course, this.course.id);
    this.dialog.open(CourseItemDeleteDialogComponent, {
      width: '400px',
      data: { name: this.course.title, id: this.course.id }
    });
    // this.deleteCourse.emit(this.course.id);
  }
}
