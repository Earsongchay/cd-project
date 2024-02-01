import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "./material/material.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    MaterialModule,
    CommonModule,
  ],
  exports: [MaterialModule]

})
export class SharedModule { }
