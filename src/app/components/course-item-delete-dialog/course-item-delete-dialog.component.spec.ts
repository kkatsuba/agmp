import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemDeleteDialogComponent } from './course-item-delete-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../node_modules/@angular/material';

describe('CourseItemDeleteDialogComponent', () => {
  let component: CourseItemDeleteDialogComponent;
  let fixture: ComponentFixture<CourseItemDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemDeleteDialogComponent ],
      providers: [
        { provide: MatDialogRef, useValue: jasmine.createSpyObj('MatDialogRef', ['close']) }
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
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
