import { CanActivate, Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { AppStore } from '../../redux/app.store';
import { Store } from 'redux';
import { AppState } from '../../redux/app.state';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, @Inject(AppStore) private store: Store<AppState>) {}

  canActivate(): boolean {
    if (this.store.getState().auth.validated) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
