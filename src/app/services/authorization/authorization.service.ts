import { Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { AppStore } from '../../redux/app.store';
import { Store } from 'redux';
import { AppState } from '../../redux/app.state';
import { signIn, logOff } from '../../redux/authorization/authorization.actions';

@Injectable()
export class AuthorizationService {
  constructor(
    private router: Router,
    @Inject(AppStore) private store: Store<AppState>
  ) {}

  signIn(email: string, password: string, nextRoute: string) {
    if (password && email) {
      this.store.dispatch(signIn(email, password));
      this.router.navigate([nextRoute]);
    }
  }

  logOff() {
    this.store.dispatch(logOff());
    this.router.navigate(['/login']);
  }
}
