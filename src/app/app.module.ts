import './rxjs.imports';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { BreadcrumbsService } from './services/breadcrumbs/breadcrumbs.service';
import { AuthInterceptor } from './services/auth-interceptor/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    AuthorizationComponent,
    NotFoundPageComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    SharingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppStore,
    HttpClientModule
  ],
  providers: [
    AuthorizationService,
    CoursesService,
    BreadcrumbsService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
