import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { MaterialModule } from '../../material.module';
import { DurationPipe } from '../../pipes/duration/duration.pipe';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Course } from '../../models/course';

@Component({
  template: `
    <app-course-item
      [course]="course" (deleteCourse)="remove($event)">
    </app-course-item>
  `
})
class TestHostComponent {
  removeId: number;
  course: Course = {
    id: 1,
    title: 'Title',
    duration: 10,
    description: 'Desc',
    createdDate: new Date()
  };

  remove(courseId: number) {
    this.removeId = courseId;
  }
}

describe('CourseItemComponent Host', () => {
  let host: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseItemComponent, TestHostComponent, DurationPipe],
      imports: [MaterialModule]
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

    expect(host.removeId).toBe(1);
  });
});
