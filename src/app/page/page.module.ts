import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {EmployeeComponent} from "./employee/employee.component";

@NgModule({
  declarations: [
    DashboardComponent,
    EmployeeComponent,
  ],
  imports: [
    CommonModule,
    PageRoutingModule
  ]
})
export class PageModule { }
