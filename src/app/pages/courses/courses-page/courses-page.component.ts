import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../../../models/course';
import { CoursesService } from '../../../services/courses/courses.service';
import { CourseItemDeleteDialogComponent } from '../../../components/course-item-delete-dialog/course-item-delete-dialog.component';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../redux/app.state';
import { List } from 'immutable';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesPageComponent implements OnInit {
  search = null;
  courses$: Observable<List<Course>>;
  isFetching$: Observable<boolean>;

  constructor(
    private coursesService: CoursesService,
    private dialog: MatDialog,
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.courses$ = this.store.select(store => store.courses.courses);
    this.isFetching$ = this.store.select(store => store.courses.isFetching);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params.q) {
        this.search = params.q;
        this.coursesService.search(this.search);
      } else {
        this.search = null;
        this.coursesService.reset();
        this.loadMore();
      }
    });
  }

  deleteCourse(course: Course) {
    const dialogRef = this.dialog.open(CourseItemDeleteDialogComponent, {
      width: '400px',
      data: { name: course.title, id: course.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.coursesService.remove(course.id);
      }
    });
  }

  loadMore() {
    this.coursesService.loadNext();
  }

  searchCourses(value) {
    if (value) {
      this.router.navigate([], { queryParams: { q: value } });
    } else {
      this.router.navigate([]);
    }
  }
}
