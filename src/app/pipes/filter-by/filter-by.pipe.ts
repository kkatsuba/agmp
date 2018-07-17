import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {
  transform(data: any[], field: string, value: string): any {
    if (value === null || value === '') {
      return data;
    }

    const search = new RegExp(`${value}`, 'gi')
    return data.filter(item => item[field].match(search));
  }
}
