import { TestBed, inject } from '@angular/core/testing';

import { AuthorizationService } from './authorization.service';
import { AppStore } from '../../redux/app.store';
import configureStore from 'redux-mock-store';
import { Router } from '@angular/router';

describe('AuthorizationService', () => {
  let service: AuthorizationService;
  let mockStore;
  let routerSpy;

  beforeEach(() => {
    mockStore = configureStore([])({});
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthorizationService,
        { provide: AppStore, useValue: mockStore },
        { provide: Router, useValue: routerSpy }
      ]
    });
  });

  beforeEach(inject(
    [AuthorizationService],
    (authorizationService: AuthorizationService) => {
      service = authorizationService;
    }
  ));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('signIn() with redirect', () => {
    service.signIn('emailo', 'pass', '/redirect');
    expect(routerSpy.navigate.calls.first().args[0]).toEqual(['/redirect']);
  });

  it('signIn() without redirect', () => {
    service.signIn(null, 'pass', '/redirect');
    expect(routerSpy.navigate.calls.count()).toBe(0);
  });

  it('logOff() with redirect', () => {
    service.logOff();
    expect(routerSpy.navigate.calls.first().args[0]).toEqual(['/login']);
  });
});
