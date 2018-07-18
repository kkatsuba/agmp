import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-course-item-delete-dialog',
  templateUrl: './course-item-delete-dialog.component.html'
})
export class CourseItemDeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CourseItemDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
