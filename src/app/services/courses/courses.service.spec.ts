import { TestBed, inject } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import { OrderByPipe } from '../../pipes/order-by/order-by.pipe';

describe('CoursesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesService, OrderByPipe]
    });
  });

  it('should be created', inject([CoursesService], (service: CoursesService) => {
    expect(service).toBeTruthy();
  }));
});
