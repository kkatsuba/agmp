import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseFormComponent } from './course-form.component';
import { MaterialModule } from '../../material.module';
import { SharingModule } from '../../sharing.module';

@NgModule({
  declarations: [ CourseFormComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharingModule
  ],
  exports: [ CourseFormComponent ]
})
export class CourseFormModule { }
