import { Component, OnInit, OnDestroy, ElementRef, Injector, Directive } from '@angular/core';
import { MatFormFieldControl } from '@angular/material';
import { FocusMonitor } from '@angular/cdk/a11y';
import { BasicControl, AuthorsData } from '../../lib/BasicControl';
import { NgControl, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator, AbstractControl, ControlValueAccessor } from '@angular/forms';
import { CustomValudators } from '../../lib/validators';
import { cloneDeep } from 'lodash';
import { CoursesService } from '../../services/courses/courses.service';

@Directive({
  selector: '[appAuthorsValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: AuthorsValidatorDirective, multi: true }
  ]
})
export class AuthorsValidatorDirective implements Validator {
  validate(control: AbstractControl) {
    return CustomValudators.authors(control);
  }
}

@Component({
  selector: 'app-authors-input',
  templateUrl: './authors-input.component.html',
  styleUrls: ['./authors-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AuthorsInputComponent,
      multi: true
    },
    { provide: MatFormFieldControl, useExisting: AuthorsInputComponent }
  ]
})
export class AuthorsInputComponent extends BasicControl<AuthorsData>
  implements ControlValueAccessor, MatFormFieldControl<AuthorsData>, OnInit, OnDestroy {

  static nextId = 0;
  id = `authors-input-${AuthorsInputComponent.nextId}`;

  authors;
  value: AuthorsData;
  propogateChange;

  private defaultAuthors;

  constructor(private fm: FocusMonitor, private elRef: ElementRef, private inject: Injector, private coursesService: CoursesService) {
    super();

    this.fm.monitor(elRef.nativeElement, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }

  writeValue(value) {
    if (value) {
      this.value = new AuthorsData(value);
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
    this.coursesService.loadAuthors().subscribe(authors => {
      this.authors = authors;
      this.defaultAuthors = cloneDeep(authors);
    });
  }


  ngOnDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef.nativeElement);
  }

  onChange(event) {
    const value = event.target.value ? event.target.value.toLowerCase() : '';
    this.authors = this.defaultAuthors.filter(author => {
      return (
        author.firstName.toLowerCase().includes(value) ||
        author.lastName.toLowerCase().includes(value)
      );
    });
  }

  authorSelected(event) {
    this.value.value.push(event.option.value);
    this.propogateChange(this.value.value);
  }

  removeAuthor(value) {
    this.value.value = this.value.value.filter(val => val.id !== value.id);
    this.propogateChange(this.value.value);
  }

  displayNull() {
    return null;
  }

}
