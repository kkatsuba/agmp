import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemDeleteDialogComponent } from './course-item-delete-dialog.component';

describe('CourseItemDeleteDialogComponent', () => {
  let component: CourseItemDeleteDialogComponent;
  let fixture: ComponentFixture<CourseItemDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
