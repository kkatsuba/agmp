import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPageComponent } from './courses-page.component';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';
import { SearchComponent } from '../../components/search/search.component';
import { CourseItemComponent } from '../../components/course-item/course-item.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { DurationPipe } from '../../pipes/duration/duration.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CoursesPageComponent', () => {
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
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesPageComponent,
        BreadcrumbsComponent,
        SearchComponent,
        CourseItemComponent,
        DurationPipe
      ],
      imports: [FormsModule, MaterialModule, BrowserAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.courses = courses;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should delete course', () => {
    const expected = [courses[0], courses[2]];
    component.deleteCourse(2);
    expect(component.courses.length).toBe(expected.length);
    expect(component.courses).toEqual(expected);
  });
});
