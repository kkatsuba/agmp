import { Component } from '@angular/core';
import { AuthorizationService } from '../../services/authorization/authorization.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-actions',
  templateUrl: './user-actions.component.html'
})
export class UserActionsComponent {
  login: Observable<string>;

  constructor(private auth: AuthorizationService) {
    this.login = this.auth.userEmail;
  }

  logOff() {
    this.auth.logOff();
  }
}
