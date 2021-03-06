import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { MaterialModule } from '../../material.module';
import { DurationPipe } from '../../pipes/duration/duration.pipe';
import { By } from '@angular/platform-browser';
import { CourseItemBorderDirective } from '../../directives/course-item-border/course-item-border.directive';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Course } from '../../models/course';
import { singleCourse as course } from '../../data/mock_courses';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseItemComponent, DurationPipe, CourseItemBorderDirective],
      imports: [MaterialModule],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    component.course = course;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('title must be in upper case', () => {
    const courseTitleDebug = fixture.debugElement.query(By.css('.mat-card-title span'));
    const courseTitle = courseTitleDebug.nativeElement;

    expect(courseTitle.textContent).toBe(course.title.toUpperCase());
  });

  it('delete course click (triggerEventHandle)', () => {
    let removeItem: Course;
    component.deleteCourse.subscribe((item: Course) => removeItem = item);

    const deleteButtonDebug = fixture.debugElement.query(By.css('.course-action-buttons .mat-warn'));
    deleteButtonDebug.triggerEventHandler('click', null);

    expect(removeItem.id).toBe(course.id);
  });
});
