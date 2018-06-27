import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { MaterialModule } from '../../material.module';
import { DurationPipe } from '../../pipes/duration/duration.pipe';
import { By } from '@angular/platform-browser';

describe('CourseItemComponent', () => {
  const course = {
    id: 1,
    title: 'title',
    duration: 50,
    description: 'descriptrion',
    createdDate: new Date()
  };
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseItemComponent, DurationPipe],
      imports: [MaterialModule]
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
    const courseTitleDebug = fixture.debugElement.query(By.css('.mat-card-title'));
    const courseTitle = courseTitleDebug.nativeElement;

    expect(courseTitle.textContent).toBe(course.title.toUpperCase());
  });

  it('delete course click (triggerEventHandle)', () => {
    let removeId: number;
    component.deleteCourse.subscribe((id: number) => removeId = id);

    const deleteButtonDebug = fixture.debugElement.query(By.css('.course-action-buttons .mat-warn'));
    deleteButtonDebug.triggerEventHandler('click', null);

    expect(removeId).toBe(course.id);
  });
});
