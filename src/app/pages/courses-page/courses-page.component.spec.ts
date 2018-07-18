import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPageComponent } from './courses-page.component';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';
import { SearchComponent } from '../../components/search/search.component';
import { CourseItemComponent } from '../../components/course-item/course-item.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { DurationPipe } from '../../pipes/duration/duration.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Course } from '../../models/course';
import { FilterByPipe } from '../../pipes/filter-by/filter-by.pipe';
import { OrderByPipe } from '../../pipes/order-by/order-by.pipe';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CourseItemDeleteDialogComponent } from '../../components/course-item-delete-dialog/course-item-delete-dialog.component';
import { CoursesService } from '../../services/courses/courses.service';

const courses = [
  {
    id: 1,
    title: 'title',
    duration: 50,
    description: 'descriptrion',
    createdDate: new Date()
  },
  {
    id: 2,
    title: 'title',
    duration: 50,
    description: 'descriptrion',
    createdDate: new Date()
  },
  {
    id: 3,
    title: 'title',
    duration: 50,
    description: 'descriptrion',
    createdDate: new Date()
  }
];

class MockCoursesService {
  getList() {
    return courses;
  }
}

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesPageComponent,
        BreadcrumbsComponent,
        SearchComponent,
        CourseItemComponent,
        DurationPipe,
        FilterByPipe,
        OrderByPipe
      ],
      imports: [FormsModule, MaterialModule, BrowserAnimationsModule],
      providers: [
        { provide: CoursesService, useClass: MockCoursesService }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    TestBed.overrideModule(CoursesPageComponent, {
      set: {
        entryComponents: [CourseItemDeleteDialogComponent]
      }
    });
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  // it('should delete course', () => {
  //   const expected = [courses[0], courses[2]];
  //   const course = new Course();
  //   course.id = 2;
  //   component.deleteCourse(course);
  //   fixture.detectChanges();
  //   expect(component.courses.length).toBe(expected.length);
  //   expect(component.courses).toEqual(expected);
  //   expect(fixture.debugElement.nativeNode.querySelectorAll('app-course-item').length).toBe(expected.length);
  // });

  it('should render items', () => {
    expect(fixture.debugElement.nativeNode.querySelectorAll('app-course-item').length).toBe(courses.length);
  });
});
