import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CoursesService } from '../../services/courses/courses.service';

@Component({
  selector: 'app-course-item-delete-dialog',
  templateUrl: './course-item-delete-dialog.component.html',
  styleUrls: ['./course-item-delete-dialog.component.css']
})
export class CourseItemDeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CourseItemDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private coursesService: CoursesService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.coursesService.deleteCourse(this.data.id);
    this.dialogRef.close();
  }
}
