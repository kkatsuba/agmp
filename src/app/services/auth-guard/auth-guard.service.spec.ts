import { TestBed, inject } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { Router } from '@angular/router';
import { AuthorizationService } from '../authorization/authorization.service';
import { of } from 'rxjs';

describe('AuthGuardService', () => {
  let authService;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  const moduleBaseProviders = [
    AuthGuardService,
    { provide: Router, useValue: routerSpy }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ...moduleBaseProviders,
        { provide: AuthorizationService, useValue: {} }
      ]
    });

    authService = TestBed.get(AuthorizationService);
  });

  it('canActivate() must be false', inject([AuthGuardService], (authGuard: AuthGuardService) => {
    authService.isAuthenticated = of(false);

    authGuard.canActivate().subscribe(result => {
      expect(result).toBe(false);
      expect(routerSpy.navigate.calls.count()).toBe(1);
      expect(routerSpy.navigate.calls.first().args[0]).toEqual(['/login']);
    });
  }));

  it('canActivate() must be true', inject([AuthGuardService], (authGuard: AuthGuardService) => {
    authService.isAuthenticated = of(true);
    expect(authGuard.canActivate()).toBeTruthy();
  }));
});
