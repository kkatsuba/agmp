import { NgModule } from '@angular/core';
import { CreateCoursesRoutingModule } from './create-course-routing.module';
import { CreateCourseComponent } from './create-course-page/create-course.component';
import { MaterialModule } from '../../material.module';
import { CourseFormModule } from '../../components/course-form/course-form.module';

@NgModule({
  imports: [
    CreateCoursesRoutingModule,
    MaterialModule,
    CourseFormModule
  ],
  declarations: [
    CreateCourseComponent
  ]
})
export class CreateCourseModule { }
