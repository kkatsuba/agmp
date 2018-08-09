import { Component, OnInit } from '@angular/core';
import { Course } from '../../../models/course';
import { CoursesService } from '../../../services/courses/courses.service';
import { CourseItemDeleteDialogComponent } from '../../../components/course-item-delete-dialog/course-item-delete-dialog.component';
import { MatDialog } from '@angular/material';
import { Observable, BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../redux/app.state';
import { List } from 'immutable';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {
  search = null;
  courses: Observable<List<Course>>;
  coursesLoading: Observable<boolean>;
  showOverlay = new BehaviorSubject(false);

  constructor(
    private coursesService: CoursesService,
    private dialog: MatDialog,
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.courses = this.store.select(state => state.courses.courses);
    this.coursesLoading = this.store.select(state => state.courses.isFetching);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(({ q = null }) => {
      this.search = q;

      if (q) {
        this.coursesService.search(this.search);
      } else {
        this.loadMore(true);
      }
    });
  }

  deleteCourse(course: Course) {
    const dialogRef = this.dialog.open(CourseItemDeleteDialogComponent, {
      width: '400px',
      data: { name: course.title, id: course.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.showOverlay.next(true);
      this.coursesService
        .remove(course.id)
        .subscribe(
          () => this.showOverlay.next(false),
          () => this.showOverlay.next(false)
        );
    });
  }

  loadMore(reset?: boolean) {
    this.coursesService.loadNext(reset);
  }

  searchCourses(value) {
    if (value) {
      this.router.navigate([], { queryParams: { q: value } });
    } else {
      this.router.navigate([]);
    }
  }
}
