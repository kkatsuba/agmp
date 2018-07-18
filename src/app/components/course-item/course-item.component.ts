import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from '../../models/course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent {
  @Input() course: ICourse;
  @Output() deleteCourse = new EventEmitter<ICourse>();

  constructor() { }

  remove() {
    this.deleteCourse.emit(this.course);
  }
}
