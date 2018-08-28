import {
  Component,
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  Injector
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  NgControl
} from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { FocusMonitor } from '@angular/cdk/a11y';
import * as moment from 'moment';
import { BasicControl, PrimitiveValue } from '../../lib/BasicControl';
import { CustomValudators } from '../../lib/validators';

@Directive({
  selector: '[appDateValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: DateValidatorDirective, multi: true }
  ]
})
export class DateValidatorDirective implements Validator {
  validate(control: AbstractControl) {
    return CustomValudators.date(control);
  }
}

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DateInputComponent,
      multi: true
    },
    { provide: MatFormFieldControl, useExisting: DateInputComponent }
  ]
})
export class DateInputComponent extends BasicControl<PrimitiveValue<string>>
  implements ControlValueAccessor, MatFormFieldControl<PrimitiveValue<string>>, OnInit, OnDestroy {

  static nextId = 0;
  id = `date-input-${DateInputComponent.nextId}`;

  value: PrimitiveValue<string>;
  propogateChange;

  constructor(private fm: FocusMonitor, private elRef: ElementRef, private inject: Injector) {
    super();

    this.fm.monitor(elRef.nativeElement, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }

  writeValue(value) {
    if (value) {
      this.value = new PrimitiveValue(value);
    }
  }

  registerOnChange(fn) {
    this.propogateChange = fn;
  }

  registerOnTouched() {}

  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() !== 'input') {
      this.elRef.nativeElement.querySelector('input').focus();
    }
  }

  ngOnInit() {
    this.ngControl = this.inject.get(NgControl);
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef.nativeElement);
  }

  onChange(event) {
    const value = event.target.value;
    if (value === '') {
      this.propogateChange(value);
    } else {
      this.propogateChange(moment(event.target.value, 'MM/DD/YYYY', true).toDate());
    }
  }
}
