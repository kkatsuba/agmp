import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditCoursePageComponent } from './edit-course-page/edit-course-page.component';


const routes: Routes = [
  {
    path: '',
    component: EditCoursePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditCourseRoutingModule { }
