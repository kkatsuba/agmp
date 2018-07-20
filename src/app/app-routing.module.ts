import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';

const router: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule'
  },
  {
    path: 'courses',
    canActivate: [AuthGuardService],
    loadChildren: './pages/courses/courses.module#CoursesModule',
    data: {
      breadscrumb: 'Courses'
    },
  },
  {
    path: 'course/:id/edit',
    canActivate: [AuthGuardService],
    loadChildren: './pages/edit-course/edit-course.module#EditCourseModule'
  },
  {
    path: 'course/new',
    canActivate: [AuthGuardService],
    loadChildren: './pages/create-course/create-course.module#CreateCourseModule'
  }
];

@NgModule({
  providers: [AuthGuardService],
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
