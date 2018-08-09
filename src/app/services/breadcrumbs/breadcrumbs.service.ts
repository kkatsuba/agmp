import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import _merge from 'lodash/merge';
import { map } from 'rxjs/operators';
import { BreadcrumbSubject, Breadcrumb } from '../../models/breadcrumbs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  _breadcrumbs = new BehaviorSubject<BreadcrumbSubject[]>([]);
  breadcrumbs: Observable<Breadcrumb[]>;

  constructor() {
    this.breadcrumbs = this._breadcrumbs.asObservable().pipe(
      map(data => data.map(value => value.breadcrumb))
    );
  }

  push(routePath: string, breadcrumb: Breadcrumb) {
    this._breadcrumbs.next([...this._breadcrumbs.getValue(), {
      routePath,
      breadcrumb
    }]);
  }

  changeBreadcrum(routePath, label) {
    const breadcrumbs = this._breadcrumbs.getValue();
    breadcrumbs.map(breadcrumb => {
      if (breadcrumb.routePath === routePath) {
        return _merge(breadcrumb, {
          breadcrumb: {
            label
          }
        });
      }

      return breadcrumb;
    });

    this._breadcrumbs.next(breadcrumbs);
  }

  erase() {
    this._breadcrumbs.next([]);
  }
}
