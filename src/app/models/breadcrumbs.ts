interface Breadcrumb {
  label: string;
  params: object;
  url: string;
}

interface BreadcrumbSubject {
  routePath: string;
  breadcrumb: Breadcrumb;
}
