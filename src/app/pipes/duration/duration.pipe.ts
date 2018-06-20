import { Pipe, PipeTransform } from '@angular/core';
import { min } from 'moment';

@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    const hours = Math.floor(value / 60);
    const minuts = value % 60;

    return `${hours ? `${hours}h` : ''} ${value % 60}min`;
  }

}
