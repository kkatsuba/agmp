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
import { catchError, map, tap } from 'rxjs/operators';
import { Helper } from '../../lib/helper';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationService {
  public userEmail: Observable<string>;
  public isAuthenticated: Observable<boolean>;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private state: State<AppState>,
    private http: HttpClient
  ) {
    this.userEmail = this.store.select(appState => appState.auth.email);
    this.isAuthenticated = this.store
      .select(appState => appState.auth.token)
      .pipe(map(token => !!token));
  }

  signIn(login: string, password: string, nextRoute: string) {
    if (!password || !login) {
      this.store.dispatch(loginError('Password and login are required'));
    }

    return this.http
      .post('/api/auth/login', { login, password })
      .pipe(
        tap(({ token }: any) => {
          this.store.dispatch(signIn(login, token));
          this.router.navigate([nextRoute]);
        }),
        catchError(error => {
          this.store.dispatch(loginError('Password or login is wrong'));
          return Helper.handleError(error);
        })
      );
  }

  logOff() {
    this.store.dispatch(logOff);
    this.router.navigate(['/login']);
  }

  token(): string {
    return this.state.value.auth.token;
  }

  getUserInfo() {
    return this.http
      .post('/api/auth/userinfo', null)
      .pipe(catchError(Helper.handleError));
  }
}
