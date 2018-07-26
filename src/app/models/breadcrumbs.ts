export interface Breadcrumb {
  label: string;
  params: object;
  url: string;
}

export interface BreadcrumbSubject {
  routePath: string;
  breadcrumb: Breadcrumb;
}
