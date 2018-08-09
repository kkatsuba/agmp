import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthorizationService } from '../../../services/authorization/authorization.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../redux/app.state';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {
  display = new BehaviorSubject(false);
  serverError: Observable<string>;
  loginForm: FormGroup;
  emailFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  passwordFormControl: FormControl = new FormControl('', [Validators.required]);

  constructor(
    private auth: AuthorizationService,
    private store: Store<AppState>
  ) {
    this.serverError = this.store.select(state => state.auth.loginError);
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: this.emailFormControl,
      password: this.passwordFormControl
    });
  }

  signIn() {
    if (this.loginForm.status === 'VALID') {
      this.display.next(true);
      this.auth
        .signIn(
          this.emailFormControl.value,
          this.passwordFormControl.value,
          '/courses'
        )
        .subscribe(
          () => this.display.next(false),
          () => this.display.next(false)
        );
    }
  }
}
