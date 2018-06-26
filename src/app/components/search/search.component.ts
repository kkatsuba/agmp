import { Component } from '@angular/core';
import { CoursesService } from '../../services/courses/courses.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchValue: string;

  constructor(private coursesService: CoursesService) { }

  onSearch() {
    this.coursesService.searchCourses(this.searchValue);
  }
}
