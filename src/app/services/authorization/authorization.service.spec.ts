import { TestBed, inject } from '@angular/core/testing';

import { AuthorizationService } from './authorization.service';
import { Router } from '@angular/router';
import { Store, State } from '@ngrx/store';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { SIGN_IN } from '../../redux/authorization/authorization.actions';
import { of } from 'rxjs';

describe('AuthorizationService', () => {
  let service: AuthorizationService;
  let storeSpy, stateSpy, routerSpy, http;
  const state = {
    auth: { token: 123, email: 'email' }
  };

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    stateSpy = jasmine.createSpyObj('State', ['value']);
    storeSpy = jasmine.createSpyObj('Store', ['dispatch', 'select']);

    storeSpy = {
      dispatch: jasmine.createSpy('dispatch'),
      select: cb => {
        return of(cb(state));
      }
    };
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthorizationService,
        { provide: Router, useValue: routerSpy },
        { provide: State, useValue: stateSpy },
        { provide: Store, useValue: storeSpy }
      ]
    });
  });

  beforeEach(inject(
    [HttpTestingController, AuthorizationService],
    (
      httpMock: HttpTestingController,
      authorizationService: AuthorizationService
    ) => {
      service = authorizationService;
      service.isAuthenticated = of(true);
      http = httpMock;
    }
  ));

  it('should be created', () => {
    service.userEmail.subscribe(email => {
      expect(email).toBe(state.auth.email);
    });

    service.isAuthenticated.subscribe(result => {
      expect(result).toBe(true);
    });
    expect(service).toBeTruthy();
  });

  it('signIn() with redirect', () => {
    service.signIn('emailo', 'pass', '/redirect').subscribe(response => {
      expect(response.token).toBeDefined();
      expect(response.token).toBe(123);
    });
    const req = http.expectOne('/api/auth/login');

    req.flush({ token: 123 });
    http.verify();

    expect(storeSpy.dispatch.calls.first().args[0]).toEqual({
      type: SIGN_IN,
      email: 'emailo',
      token: 123
    });
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
