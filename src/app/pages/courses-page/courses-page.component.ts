import { Component, OnInit, Inject } from '@angular/core';
import { ICourse } from '../../models/course';
import { CoursesService } from '../../services/courses/courses.service';
import { AppStore } from '../../redux/app.store';
import { Store } from 'redux';
import { AppState } from '../../redux/app.state';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {
  courses: Array<ICourse>;
  isFetching: boolean;
  loadMore: boolean;

  constructor(
    private coursesService: CoursesService,
    @Inject(AppStore) private store: Store<AppState>
  ) {
    this.store.subscribe(() => this.subscribeStore());
    this.subscribeStore();
  }

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses() {
    this.coursesService.loadNextCourses();
  }

  private subscribeStore() {
    const coursesState = this.store.getState().courses;
    this.isFetching = coursesState.isFetching;
    this.courses = coursesState.courses;
    this.loadMore = coursesState.isEnd;
  }
}
