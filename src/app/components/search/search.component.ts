import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  search = new FormControl();
  @Input() searchValue: string;
  @Output() filterChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.search.setValue(this.searchValue);
    this.search.valueChanges
      .pipe(
        debounceTime(300)
      )
      .subscribe(value => {
        this.filterChange.emit(value);
      });
  }
}
