import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthorizationService } from '../../../services/authorization/authorization.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../redux/app.state';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {
  serverError$;
  loginForm: FormGroup;
  emailFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  passwordFormControl: FormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private auth: AuthorizationService, private store: Store<AppState>) {
    this.serverError$ = this.store.select(state => state.auth.loginError);
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: this.emailFormControl,
      password: this.passwordFormControl
    });
  }

  isDisabled(): boolean {
    return this.loginForm.status !== 'VALID';
  }

  signIn() {
    this.auth.signIn(this.emailFormControl.value, this.passwordFormControl.value, '/courses');
  }
}
