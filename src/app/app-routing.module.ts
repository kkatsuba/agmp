import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

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
      allowBreadcrumbs: true
    }
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  providers: [AuthGuardService],
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
