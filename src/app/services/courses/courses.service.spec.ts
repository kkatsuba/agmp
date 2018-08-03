import { TestBed, inject } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import { Store, State } from '@ngrx/store';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { multipleCourses } from '../../data/mock_courses';

describe('CoursesService', () => {
  let storeSpy;
  let http: HttpTestingController;
  let service: CoursesService;

  beforeEach(() => {
    storeSpy = jasmine.createSpyObj('Store', ['dispatch', 'select']);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        CoursesService,
        { provide: Store, useValue: storeSpy },
        { provide: State, useValue: {
          value: {
            courses: { page: 1, limit: 10 }
          }
        }}
      ]
    });
  });

  beforeEach(inject(
    [HttpTestingController, CoursesService],
    (httpMock: HttpTestingController, coursesService: CoursesService) => {
      service = coursesService;
      http = httpMock;
    }
  ));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shoud load courses', () => {
    service.loadNext();

    const req = http.expectOne('/api/courses?start=10&count=10');
    req.flush(multipleCourses);
    http.verify();

    const arg = storeSpy.dispatch.calls.mostRecent().args[0];
    expect(arg.payload.length).toBe(3);
  });
});
