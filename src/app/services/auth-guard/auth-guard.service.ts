import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthorizationService } from '../authorization/authorization.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, public authService: AuthorizationService) {}

  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated.pipe(
      tap(isAuthenticated => !isAuthenticated && this.router.navigate(['/login']))
    );
  }
}
