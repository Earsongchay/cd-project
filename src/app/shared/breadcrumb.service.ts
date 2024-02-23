import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ActivatedRouteSnapshot, NavigationEnd, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  private breadcrumbs = new BehaviorSubject<any[]>([]);
  breadcrumbs$ = this.breadcrumbs.asObservable();

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.generateBreadcrumbs(this.router.routerState.snapshot.root);
      }
    });
  }

  private generateBreadcrumbs(route: ActivatedRouteSnapshot, url: string = '', breadcrumbs: any[] = []): void {
    const children: ActivatedRouteSnapshot[] = route.children;

    if (children.length === 0) {
      return;
    }

    for (const child of children) {
      if (child.outlet === 'primary') {
        const routeURL: string = child.url.map(segment => segment.path).join('/');
        if (routeURL !== '') {
          url += `/${routeURL}`;
        }

        const breadcrumb = {
          label: child.data?.['breadcrumb'] ? child.data['breadcrumb']: child.url[0].path,
          url: url
        };

        breadcrumbs.push(breadcrumb);
        this.setBreadcrumbs(breadcrumbs)
        this.generateBreadcrumbs(child, url, breadcrumbs);
        return;
      }
    }
  }

  setBreadcrumbs(breadcrumbs: any[]): void {
    this.breadcrumbs.next(breadcrumbs);
  }
}
