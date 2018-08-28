import { AbstractControl } from '@angular/forms';
import { toNumber, isNaN } from 'lodash';
import * as moment from 'moment';

export namespace CustomValudators {
  export function number(control: AbstractControl) {
    const value = toNumber(control.value);
    if (isNaN(value)) {
      return { number: true };
    }

    return null;
  }

  export function date(control: AbstractControl) {
    if (control.value === '' || moment(control.value).isValid()) {
      return null;
    }

    return { date: true };
  }

  export function authors(control: AbstractControl) {
    if (!control.value || (control.value && control.value.length > 0)) {
      return null;
    }

    return { authors: true };
  }
}
