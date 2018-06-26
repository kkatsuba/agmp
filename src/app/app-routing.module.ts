import { RouterModule, Routes } from '@angular/router';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { NgModule } from '@angular/core';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { LoginRedirectService } from './services/login-redirect/login-redirect.service';

const router: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  {
    path: 'login',
    canActivate: [LoginRedirectService],
    component: LoginPageComponent
  },
  {
    path: 'courses',
    canActivate: [AuthGuardService],
    component: CoursesPageComponent,
    data: {
      breadscrumb: 'Courses'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
