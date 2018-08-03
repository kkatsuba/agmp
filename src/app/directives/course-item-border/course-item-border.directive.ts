import { Directive, ElementRef, Input, OnInit } from '@angular/core';

const COURSE_ACTIVE_DAYS = 14;

@Directive({
  selector: '[appCourseItemBorder]'
})
export class CourseItemBorderDirective implements OnInit {
  @Input() date: any;

  constructor(private element: ElementRef) {}

  ngOnInit() {
    const createdTime = this.date.getTime();
    const now = new Date();
    const activeTime = (new Date()).setDate(now.getDate() - COURSE_ACTIVE_DAYS);

    let borderColor;

    if (createdTime < now.getTime() && this.date >= activeTime) {
      borderColor = 'green';
    }

    if (createdTime > now.getTime()) {
      borderColor = 'blue';
    }

    this.element.nativeElement.style.border = `1px solid ${borderColor}`;
  }
}
