import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { SearchComponent } from '../../components/search/search.component';
import { SharingModule } from '../../sharing.module';
import { CourseItemComponent } from '../../components/course-item/course-item.component';
import { MaterialModule } from '../../material.module';
import { CourseItemDeleteDialogComponent } from '../../components/course-item-delete-dialog/course-item-delete-dialog.component';
import { CourseItemBorderDirective } from '../../directives/course-item-border/course-item-border.directive';
import { CoursesRootComponent } from './courses-root.component';
import { SpinnerOverlayModule } from '../../components/spinner-overlay/spinner-overlay.module';

@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharingModule,
    FormsModule,
    SpinnerOverlayModule
  ],
  declarations: [
    CoursesRootComponent,
    CoursesPageComponent,
    SearchComponent,
    CourseItemComponent,
    CourseItemDeleteDialogComponent,
    CourseItemBorderDirective
  ],
  entryComponents: [CourseItemDeleteDialogComponent]
})
export class CoursesModule { }
