import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { CourseItemComponent } from './course-item.component';
import { MaterialModule } from '../../material.module';
import { DurationPipe } from '../../pipes/duration/duration.pipe';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Course } from '../../models/course';

const testCourse = {
  id: 1,
  title: 'Title',
  duration: 10,
  description: 'Desc',
  createdDate: new Date()
};

@Component({
  template: `
    <app-course-item
      [course]="course" (deleteCourse)="remove($event)">
    </app-course-item>
  `
})
class TestHostComponent {
  removeItem: Course;
  course: Course = testCourse;

  remove(course: Course) {
    this.removeItem = course;
  }
}

describe('CourseItemComponent Host', () => {
  let host: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseItemComponent, TestHostComponent, DurationPipe],
      imports: [MaterialModule],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(host).toBeTruthy();
  });

  it('delete course click', () => {
    const deleteButtonDebug = fixture.debugElement.query(By.css('.course-action-buttons .mat-warn'));
    deleteButtonDebug.triggerEventHandler('click', null);

    expect(host.removeItem.id).toEqual(1);
  });
});
