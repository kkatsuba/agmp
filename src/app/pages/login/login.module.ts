import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { SharingModule } from '../../sharing.module';
import { MaterialModule } from '../../material.module';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    SharingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginPageComponent
  ]
})
export class LoginModule { }
