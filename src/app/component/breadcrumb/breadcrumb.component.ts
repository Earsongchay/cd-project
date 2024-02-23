import { Component } from '@angular/core';
import {BreadcrumbService} from "../../shared/breadcrumb.service";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

  breadcrumb:{label:string, url:string}[]
  constructor(private breadcrumbService:BreadcrumbService) {
    this.breadcrumbService.breadcrumbs$.subscribe(breadcrumb => {
      this.breadcrumb = breadcrumb
    })

  }

}
