import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthorizationService } from '../authorization/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class LoginRedirectService implements CanActivate {

  constructor(private router: Router, private authService: AuthorizationService) {}

  canActivate(): boolean {
    if (this.authService.isLogged()) {
      this.router.navigate(['/courses']);
      return false;
    }

    return true;
  }
}
