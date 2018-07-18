import { Component } from '@angular/core';
import { AuthorizationService } from '../../services/authorization/authorization.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent {
  login: Observable<string>;

  constructor(private auth: AuthorizationService, private store: Store<AppState>) {
    this.login = this.store.select(state => state.auth.email);
  }

  logOff() {
    this.auth.logOff();
  }
}
