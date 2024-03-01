import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "./material/material.module";
import {HttpClientModule} from "@angular/common/http";
import {ComponentModule} from "../component/component.module";
import {NgxSpinnerModule} from "ngx-spinner";
import {NgxSpinnerConfig} from "ngx-spinner/lib/config";


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    MaterialModule,
    CommonModule,
    ComponentModule,
  ],
  exports:[
    ComponentModule,
    HttpClientModule,
    MaterialModule,
  ]
})
export class SharedModule { }
