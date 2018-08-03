import { NgModule } from '@angular/core';
import { EditCourseRoutingModule } from './edit-course-routing.module';
import { EditCoursePageComponent } from './edit-course-page/edit-course-page.component';
import { MaterialModule } from '../../material.module';
import { CourseFormModule } from '../../components/course-form/course-form.module';
import { CommonModule } from '@angular/common';
import { SpinnerOverlayModule } from '../../components/spinner-overlay/spinner-overlay.module';

@NgModule({
  imports: [
    CommonModule,
    EditCourseRoutingModule,
    MaterialModule,
    CourseFormModule,
    SpinnerOverlayModule
  ],
  declarations: [
    EditCoursePageComponent
  ]
})
export class EditCourseModule { }
