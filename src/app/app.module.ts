import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { SearchComponent } from './components/search/search.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { DurationPipe } from './pipes/duration/duration.pipe';
import { AppRoutingModule } from './app-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { AuthorizationService } from './services/authorization/authorization.service';
import { CourseItemBorderDirective } from './directives/course-item-border/course-item-border.directive';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';
import { FilterByPipe } from './pipes/filter-by/filter-by.pipe';
import { CoursesService } from './services/courses/courses.service';
import { CourseItemDeleteDialogComponent } from './components/course-item-delete-dialog/course-item-delete-dialog.component';
import { AppStore } from './redux/app.store';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    CoursesPageComponent,
    CourseItemComponent,
    SearchComponent,
    AuthorizationComponent,
    DurationPipe,
    BreadcrumbsComponent,
    LoginPageComponent,
    CourseItemBorderDirective,
    OrderByPipe,
    FilterByPipe,
    CourseItemDeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppStore
  ],
  providers: [
    AuthGuardService,
    AuthorizationService,
    CoursesService
  ],
  bootstrap: [AppComponent],
  entryComponents: [CourseItemDeleteDialogComponent]
})
export class AppModule { }
