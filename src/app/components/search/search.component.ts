import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  search = new Subject<string>();
  @Input() searchValue: string;
  @Output() filterChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.search.next(this.searchValue);
    this.search
      .pipe(
        filter(value => value.length === 0 || value.length > 2),
        debounceTime(300)
      )
      .subscribe(value => {
        this.filterChange.emit(value);
      });
  }
}
