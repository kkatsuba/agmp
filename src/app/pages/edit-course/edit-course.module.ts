import { NgModule } from '@angular/core';
import { EditCourseRoutingModule } from './edit-course-routing.module';
import { EditCoursePageComponent } from './edit-course-page/edit-course-page.component';
import { MaterialModule } from '../../material.module';
import { CourseFormModule } from '../../components/course-form/course-form.module';

@NgModule({
  imports: [
    EditCourseRoutingModule,
    MaterialModule,
    CourseFormModule
  ],
  declarations: [
    EditCoursePageComponent
  ]
})
export class EditCourseModule { }
