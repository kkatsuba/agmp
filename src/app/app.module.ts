import './rxjs.imports';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { SharingModule } from './sharing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthorizationService } from './services/authorization/authorization.service';
import { CoursesService } from './services/courses/courses.service';
import { AppStore } from './redux/app.store';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    AuthorizationComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    SharingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppStore
  ],
  providers: [
    AuthorizationService,
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
