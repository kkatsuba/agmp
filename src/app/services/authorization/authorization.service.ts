import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { AppState } from '../../redux/app.state';
import {
  signIn,
  logOff
} from '../../redux/authorization/authorization.actions';

@Injectable()
export class AuthorizationService {
  public userEmail;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private state: State<AppState>
  ) {
    this.userEmail = this.store.select(appState => appState.auth.email);
  }

  signIn(email: string, password: string, nextRoute: string) {
    if (password && email) {
      this.store.dispatch(signIn(email));
      this.router.navigate([nextRoute]);
    }
  }

  logOff() {
    this.store.dispatch(logOff);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.state.value.auth.validated;
  }

  getUserInfo() {
    return this.state.value.auth.email;
  }
}
