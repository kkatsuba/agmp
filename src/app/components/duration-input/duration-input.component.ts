import { Component, OnInit, OnDestroy, Injector, ElementRef, Directive } from '@angular/core';
import { BasicControl, PrimitiveValue } from '../../lib/BasicControl';
import { MatFormFieldControl } from '@angular/material';
import { ControlValueAccessor, NgControl, NG_VALIDATORS, Validator, AbstractControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FocusMonitor } from '@angular/cdk/a11y';
import { CustomValudators } from '../../lib/validators';

@Directive({
  selector: '[appNumberValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: NumberValidatorDirective, multi: true }
  ]
})
export class NumberValidatorDirective implements Validator {
  validate(control: AbstractControl) {
    return CustomValudators.number(control);
  }
}

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DurationInputComponent,
      multi: true
    },
    { provide: MatFormFieldControl, useExisting: DurationInputComponent }
  ]
})
export class DurationInputComponent extends BasicControl<PrimitiveValue<number>>
implements ControlValueAccessor, MatFormFieldControl<PrimitiveValue<number>>, OnInit, OnDestroy {

  static nextId = 0;
  id = `date-input-${DurationInputComponent.nextId}`;

  value: PrimitiveValue<number>;
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
      this.value = new PrimitiveValue<number>(value);
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
    this.propogateChange(event.target.value);
  }

}
