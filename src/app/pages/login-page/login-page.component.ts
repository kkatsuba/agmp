import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthorizationService } from '../../services/authorization/authorization.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  emailFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  passwordFormControl: FormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private auth: AuthorizationService) {}

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
