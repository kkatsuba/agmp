import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateCoursesRoutingModule } from './create-course-routing.module';
import { CreateCourseComponent } from './create-course-page/create-course.component';
import { SharingModule } from '../../sharing.module';
import { MaterialModule } from '../../material.module';
import { CourseFormComponent } from '../../components/course-form/course-form.component';

@NgModule({
  imports: [
    CommonModule,
    CreateCoursesRoutingModule,
    MaterialModule,
    SharingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CreateCourseComponent,
    CourseFormComponent
  ]
})
export class CreateCourseModule { }
