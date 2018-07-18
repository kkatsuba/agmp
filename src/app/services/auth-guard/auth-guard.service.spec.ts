import { TestBed, inject } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { Router } from '@angular/router';
import { AuthorizationService } from '../authorization/authorization.service';

describe('AuthGuardService', () => {
  let authService: AuthorizationService;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  const moduleBaseProviders = [
    AuthGuardService,
    { provide: Router, useValue: routerSpy }
  ];

  describe('Not auth user', () => {
    beforeEach(() => {
      authService = jasmine.createSpyObj('AuthorizationService', {
        isAuthenticated: true
      });

      TestBed.configureTestingModule({
        providers: [
          ...moduleBaseProviders,
          { provide: AuthorizationService, useValue: authService }
        ]
      });
    });

    it('canActivate() must be true', inject([AuthGuardService], (authGuard: AuthGuardService) => {
      expect(authGuard.canActivate()).toBeTruthy();
    }));

  });

  describe('Auth user', () => {

    beforeEach(() => {
      authService = jasmine.createSpyObj('AuthorizationService', ['isAuthenticated']);

      TestBed.configureTestingModule({
        providers: [
          ...moduleBaseProviders,
          { provide: AuthorizationService, useValue: authService }
        ]
      });
    });

    it('canActivate() must be false', inject([AuthGuardService], (authGuard: AuthGuardService) => {
      expect(authGuard.canActivate()).toBeFalsy();
      expect(routerSpy.navigate.calls.count()).toBe(1);
      expect(routerSpy.navigate.calls.first().args[0]).toEqual(['/login']);
    }));

  });
});
