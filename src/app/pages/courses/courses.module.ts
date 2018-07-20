import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';
import { SearchComponent } from '../../components/search/search.component';
import { SharingModule } from '../../sharing.module';
import { CourseItemComponent } from '../../components/course-item/course-item.component';
import { MaterialModule } from '../../material.module';
import { CourseItemDeleteDialogComponent } from '../../components/course-item-delete-dialog/course-item-delete-dialog.component';
import { CourseItemBorderDirective } from '../../directives/course-item-border/course-item-border.directive';

@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MaterialModule,
    SharingModule,
    FormsModule
  ],
  declarations: [
    CoursesPageComponent,
    BreadcrumbsComponent,
    SearchComponent,
    CourseItemComponent,
    CourseItemDeleteDialogComponent,
    CourseItemBorderDirective
  ],
  entryComponents: [CourseItemDeleteDialogComponent]
})
export class CoursesModule { }
