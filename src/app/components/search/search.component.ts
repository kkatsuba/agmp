import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Input() searchValue: string;
  @Output() filterChange = new EventEmitter<string>();

  constructor() { }

  onSearch() {
    this.filterChange.emit(this.searchValue);
  }
}
