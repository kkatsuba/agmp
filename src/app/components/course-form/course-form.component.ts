import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Course } from '../../models/course';
import { CustomValudators } from '../../lib/validators';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  @Input() course: Course;
  @Output() save = new EventEmitter<Course>();
  @Output() cancel = new EventEmitter();
  courseForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.course = this.course || new Course();
    this.createForm();
  }

  createForm() {
    this.courseForm = this.formBuilder.group({
      id: this.course.id,
      title: [this.course.title, Validators.compose([Validators.required, Validators.maxLength(50)])],
      description: [this.course.description, Validators.compose([Validators.required, Validators.maxLength(500)])],
      date: [this.course.date, Validators.required],
      duration: [this.course.duration, Validators.compose([Validators.required, CustomValudators.number])],
      authors: [this.course.authors]
    });
  }

  addAuthor(event) {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.courseForm.value.authors.push(value);
    }

    if (input) {
      input.value = '';
    }
  }

  removeAuthor(authorId) {
    if (authorId >= 0) {
      this.courseForm.value.authors.splice(authorId, 1);
    }
  }

  saveCourse() {
    this.save.emit({
      ...this.course,
      ...this.courseForm.value
    });
  }

  cancelSave() {
    this.cancel.emit();
  }

  isDisabled(): boolean {
    return this.courseForm.status !== 'VALID';
  }
}
