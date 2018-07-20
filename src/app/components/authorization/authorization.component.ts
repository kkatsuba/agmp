import { Component } from '@angular/core';
import { AuthorizationService } from '../../services/authorization/authorization.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent {
  login: Observable<string>;

  constructor(private auth: AuthorizationService) {
    this.login = this.auth.userEmail;
  }

  logOff() {
    this.auth.logOff();
  }
}
