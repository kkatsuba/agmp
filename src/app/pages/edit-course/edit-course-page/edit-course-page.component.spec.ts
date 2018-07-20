import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCoursePageComponent } from './edit-course-page.component';
import { CoursesService } from '../../../services/courses/courses.service';

@Component({
  selector: 'app-course-form',
  template: ''
})
class MockedCourseFormComponent {
  @Input() course;
}

const MockActivatedRoute = {
  snapshot: {
    paramMap: {
      get: jasmine.createSpy('get')
    }
  }
};

describe('EditCoursePageComponent', () => {
  let component: EditCoursePageComponent;
  let fixture: ComponentFixture<EditCoursePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCoursePageComponent, MockedCourseFormComponent ],
      providers: [
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate']) },
        { provide: ActivatedRoute, useValue: MockActivatedRoute },
        { provide: CoursesService, useValue: jasmine.createSpyObj('CourseService', ['update', 'getById']) }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCoursePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
