import { Router } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesService } from '../../../services/courses/courses.service';
import { CreateCourseComponent } from './create-course.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course-form',
  template: ''
})
class MockedCourseFormComponent {}

describe('CreateCourseComponent', () => {
  let component: CreateCourseComponent;
  let fixture: ComponentFixture<CreateCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCourseComponent, MockedCourseFormComponent ],
      providers: [
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate']) },
        { provide: CoursesService, useValue: jasmine.createSpyObj('CourseService', ['createCourse']) }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
