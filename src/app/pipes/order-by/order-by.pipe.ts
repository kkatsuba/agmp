import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(data: any[], field: string): any {
    return data.sort((a, b) => b[field] - a[field]);
  }
}
