import { Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AppStore } from '../../redux/app.store';
import { Store } from 'redux';
import { AppState } from '../../redux/app.state';
import { signIn, logOff } from '../../redux/authorization/authorization.actions';

@Injectable()
export class AuthorizationService {
  private readonly AUTH_COOKIE = 'avt';

  constructor(
    private router: Router,
    @Inject(AppStore) private store: Store<AppState>,
    private cookieService: CookieService
  ) {}

  isLogged() {
    const email = this.cookieService.get(this.AUTH_COOKIE);
    if (email) {
      this.store.dispatch(signIn(email));
      return true;
    }

    return false;
  }

  signIn(email: string, password: string, nextRoute: string) {
    if (password && email) {
      this.store.dispatch(signIn(email));
      this.cookieService.set(this.AUTH_COOKIE, email);
      this.router.navigate([nextRoute]);
    }
  }

  logOff() {
    this.cookieService.delete(this.AUTH_COOKIE);
    this.store.dispatch(logOff());
    this.router.navigate(['/login']);
  }
}
