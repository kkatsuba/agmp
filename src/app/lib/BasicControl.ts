import { NgControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { IAuthor } from '../models/author';

export interface Empty {
  isEmpty(): boolean;
}


export class AuthorsData implements Empty {
  constructor(public value: IAuthor[]) {}

  isEmpty() {
    return !this.value || !this.value.length;
  }
}

export class PrimitiveValue<T extends string | number> implements Empty {
  constructor (public value: T) {}

  isEmpty() {
    return this.value === '' || this.value === 0;
  }
}

export abstract class BasicControl<T extends Empty> {
  private _placeholder: string;
  private _required = false;
  private _disabled = false;
  private _value: T;

  stateChanges = new Subject<void>();
  focused = false;
  describedBy = '';
  ngControl: NgControl = null;

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  @Input()
  get placeholder(): string {
    return this._placeholder;
  }
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this.stateChanges.next();
  }

  @Input()
  get value(): T {
    return this._value;
  }
  set value(value: T) {
    this._value = value;
    this.stateChanges.next();
  }

  get empty() {
    return !this.value || this.value.isEmpty();
  }

  get errorState() {
    return this.ngControl.invalid;
  }

  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }
}
