import { TestBed, inject } from '@angular/core/testing';

import { AuthorizationService } from './authorization.service';
import { Router } from '@angular/router';
import { Store, State } from '@ngrx/store';

describe('AuthorizationService', () => {
  let service: AuthorizationService;
  let storeSpy;
  let stateSpy;
  let routerSpy;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    stateSpy = jasmine.createSpyObj('State', ['value']);
    storeSpy = jasmine.createSpyObj('Store', ['dispatch']);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthorizationService,
        { provide: Router, useValue: routerSpy },
        { provide: State, useValue: stateSpy },
        { provide: Store, useValue: storeSpy }
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
