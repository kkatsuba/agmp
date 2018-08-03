import { TestBed, inject } from '@angular/core/testing';

import { AuthorizationService } from './authorization.service';
import { Router } from '@angular/router';
import { Store, State } from '@ngrx/store';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { SIGN_IN } from '../../redux/authorization/authorization.actions';

describe('AuthorizationService', () => {
  let service: AuthorizationService;
  let storeSpy;
  let stateSpy;
  let routerSpy;
  let http;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    stateSpy = jasmine.createSpyObj('State', ['value']);
    storeSpy = jasmine.createSpyObj('Store', ['dispatch', 'select']);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthorizationService,
        { provide: Router, useValue: routerSpy },
        { provide: State, useValue: stateSpy },
        { provide: Store, useValue: storeSpy }
        // { provide: HttpClient, useValue: http },
      ]
    });
  });

  beforeEach(inject(
    [HttpTestingController, AuthorizationService],
    (httpMock: HttpTestingController, authorizationService: AuthorizationService) => {
      service = authorizationService;
      http = httpMock;
    }
  ));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('signIn() with redirect', () => {
    service.signIn('emailo', 'pass', '/redirect');
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
