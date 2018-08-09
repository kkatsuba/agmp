import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { MaterialModule } from '../../material.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { SpinnerOverlayModule } from '../../components/spinner-overlay/spinner-overlay.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SpinnerOverlayModule
  ],
  declarations: [
    LoginPageComponent
  ]
})
export class LoginModule { }
