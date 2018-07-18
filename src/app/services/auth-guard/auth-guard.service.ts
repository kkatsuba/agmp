import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthorizationService } from '../authorization/authorization.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, public authService: AuthorizationService) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
