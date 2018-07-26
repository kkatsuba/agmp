import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  PRIMARY_OUTLET
} from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { BreadcrumbsService } from '../../services/breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs$: Observable<any[]>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private breadcrumbsService: BreadcrumbsService
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbsService.erase();
        this.getBreadcrumbs(this.activatedRoute.root);
      });

    this.breadcrumbs$ = this.breadcrumbsService.breadcrumbs$;
  }

  getBreadcrumbs(route: ActivatedRoute, url = '', breadcrumbs = []) {
    const ROUTE_DATA_BREADCRUMB = 'breadcrumb';
    const children = route.children;
    let rootUrl = url;

    if (!children.length) {
      return;
    }

    for (const child of children) {
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      const childData = child.routeConfig.data;
      if (!childData || !childData.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        rootUrl += child.routeConfig.path ? `/${child.routeConfig.path}` : '';
        return this.getBreadcrumbs(child, rootUrl, breadcrumbs);
      }

      const routeURL: string = child.snapshot.url
        .map(segment => segment.path)
        .join('/');

      url += routeURL === '' ? '' : `/${routeURL}`;

      const breadcrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        params: child.snapshot.queryParams,
        url: url
      };

      this.breadcrumbsService.push(child.routeConfig.path, breadcrumb);

      return this.getBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}
