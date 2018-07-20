import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { CourseFormComponent } from './course-form.component';
import { MaterialModule } from '../../material.module';
import { singleCourse } from '../../data/mock_courses';
import { DurationPipe } from '../../pipes/duration/duration.pipe';

describe('CourseFormComponent', () => {
  let component: CourseFormComponent;
  let fixture: ComponentFixture<CourseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseFormComponent, DurationPipe],
      imports: [MaterialModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule],
      providers: [FormBuilder],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseFormComponent);
    component = fixture.componentInstance;
    component.course = singleCourse;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
