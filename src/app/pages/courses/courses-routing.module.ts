import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CoursesRootComponent } from './courses-root.component';


const routes: Routes = [
  {
    path: '',
    component: CoursesRootComponent,
    data: {
      breadcrumb: 'Courses'
    },
    children: [
      {
        path: '',
        component: CoursesPageComponent
      },
      {
        path: ':id/edit',
        loadChildren: '../edit-course/edit-course.module#EditCourseModule',
        data: {
          breadcrumb: 'Edit course'
        }
      },
      {
        path: 'new',
        loadChildren: '../create-course/create-course.module#CreateCourseModule',
        data: {
          breadcrumb: 'New course'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
