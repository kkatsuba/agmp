import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  @Input() searchValue: string;
  @Output() filterChange = new EventEmitter<string>();

  constructor() { }

  onSearch() {
    this.filterChange.emit(this.searchValue);
  }
}
