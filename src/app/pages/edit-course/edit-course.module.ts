import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCourseRoutingModule } from './edit-course-routing.module';
import { EditCoursePageComponent } from './edit-course-page/edit-course-page.component';
import { SharingModule } from '../../sharing.module';
import { MaterialModule } from '../../material.module';
import { CourseFormComponent } from '../../components/course-form/course-form.component';

@NgModule({
  imports: [
    CommonModule,
    EditCourseRoutingModule,
    MaterialModule,
    SharingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    EditCoursePageComponent,
    CourseFormComponent
  ]
})
export class EditCourseModule { }
