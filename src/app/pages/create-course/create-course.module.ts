import { NgModule } from '@angular/core';
import { CreateCoursesRoutingModule } from './create-course-routing.module';
import { CreateCourseComponent } from './create-course-page/create-course.component';
import { MaterialModule } from '../../material.module';
import { CourseFormModule } from '../../components/course-form/course-form.module';
import { CommonModule } from '@angular/common';
import { SpinnerOverlayModule } from '../../components/spinner-overlay/spinner-overlay.module';

@NgModule({
  imports: [
    CommonModule,
    CreateCoursesRoutingModule,
    MaterialModule,
    CourseFormModule,
    SpinnerOverlayModule
  ],
  declarations: [
    CreateCourseComponent
  ]
})
export class CreateCourseModule { }
