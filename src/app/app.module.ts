import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { SearchComponent } from './components/search/search.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';

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
    PrimaryButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
