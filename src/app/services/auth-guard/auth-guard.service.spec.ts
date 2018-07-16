import { TestBed, inject } from '@angular/core/testing';
import configureStore from 'redux-mock-store';

import { AuthGuardService } from './auth-guard.service';
import { AppStore } from '../../redux/app.store';
import { Router } from '@angular/router';

describe('AuthGuardService', () => {
  let service: AuthGuardService;
  let mockStore;
  let routerSpy;

  beforeEach(() => {
    mockStore = configureStore([])({});
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuardService,
        { provide: AppStore, useValue: mockStore },
        { provide: Router, useValue: routerSpy }
      ]
    });
  });

  beforeEach(inject([AuthGuardService], (authService: AuthGuardService) => {
    service = authService;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('canActivate() must be true', () => {
    service['store'] = configureStore([])({
      auth: {
        validated: true
      }
    });
    expect(service.canActivate()).toBeTruthy();
  });

  it('canActivate() must be false', () => {
    service['store'] = configureStore([])({
      auth: {
        validated: false
      }
    });
    expect(service.canActivate()).toBeFalsy();
    expect(routerSpy.navigate.calls.count()).toBe(1);
    expect(routerSpy.navigate.calls.first().args[0]).toEqual(['/login']);
  });
});
