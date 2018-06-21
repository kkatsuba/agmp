import { Component, Inject } from '@angular/core';
import { AuthorizationService } from '../../services/authorization/authorization.service';
import { AppState } from '../../redux/app.state';
import { AppStore } from '../../redux/app.store';
import { Store } from 'redux';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent {
  login: string;

  constructor(
    private auth: AuthorizationService,
    @Inject(AppStore) private store: Store<AppState>
  ) {
    this.store.subscribe(() => this.subscribeStore());
    this.subscribeStore();
  }

  logOff() {
    this.auth.logOff();
  }

  subscribeStore() {
    const state = this.store.getState();
    this.login = state.auth.email;
  }
}
