import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { AppState } from '../../redux/app.state';
import {
  signIn,
  logOff,
  loginError
} from '../../redux/authorization/authorization.actions';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Helper } from '../helper';

@Injectable()
export class AuthorizationService {
  public userEmail;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private state: State<AppState>,
    private http: HttpClient
  ) {
    this.userEmail = this.store.select(appState => appState.auth.email);
  }

  signIn(login: string, password: string, nextRoute: string) {
    if (!password || !login) {
      this.store.dispatch(loginError('Password and login are required'));
    }

    this.http
      .post('/api/auth/login', { login, password })
      .pipe(
        catchError(error => {
          this.store.dispatch(loginError('Password or login is wrong'));
          return Helper.handleError(error);
        })
      )
      .subscribe(({ token }: any) => {
        this.store.dispatch(signIn(login, token));
        this.router.navigate([nextRoute]);
      });
  }

  logOff() {
    this.store.dispatch(logOff);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!this.state.value.auth.token;
  }

  token(): string {
    return this.state.value.auth.token;
  }

  getUserInfo() {
    return this.http
      .post('/api/auth/userinfo', null)
      .pipe(
        catchError(Helper.handleError)
      );
  }
}
