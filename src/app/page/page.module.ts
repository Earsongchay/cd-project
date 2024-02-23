import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import {DashboardComponent} from "./dashboard/dashboard.component";
import { WelcomeComponent } from './welcome/welcome.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    DashboardComponent,
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PageModule { }
