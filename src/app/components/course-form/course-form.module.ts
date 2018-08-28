import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseFormComponent } from './course-form.component';
import { MaterialModule } from '../../material.module';
import { SharingModule } from '../../sharing.module';
import { DateInputComponent, DateValidatorDirective } from '../date-input/date-input.component';
import { DurationInputComponent, NumberValidatorDirective } from '../duration-input/duration-input.component';
import { AuthorsInputComponent, AuthorsValidatorDirective } from '../authors-input/authors-input.component';

@NgModule({
  declarations: [
    CourseFormComponent,
    AuthorsInputComponent,
    AuthorsValidatorDirective,
    DateInputComponent,
    DateValidatorDirective,
    DurationInputComponent,
    NumberValidatorDirective
  ],
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
