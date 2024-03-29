import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { StoreModule } from '@ngrx/store'
import { openSideBarReducer } from './shared/state-manager/sidebar/open-sidebar.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FooterComponent } from './component/footer/footer.component';
import {PageModule} from "./page/page.module";
import {SharedModule} from "./shared/shared.module";
import { EffectsModule } from '@ngrx/effects';
import {authReducer} from "./shared/state-manager/auth/auth.reducer";
import {AuthEffects} from "./shared/state-manager/auth/auth.effect";
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';
import { ProfileComponent } from './component/profile/profile.component';
import {CdkMenu, CdkMenuItem, CdkMenuTrigger} from "@angular/cdk/menu";
import {MaterialModule} from "./shared/material/material.module";
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig} from "@angular/material/dialog";
import { CardComponent } from './component/card/card.component';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from "@angular/material/core";
import {NgxSpinnerModule} from "ngx-spinner";
import {MAT_PAGINATOR_DEFAULT_OPTIONS} from "@angular/material/paginator";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    FooterComponent,
    BreadcrumbComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    StoreModule.forRoot({sidebar: openSideBarReducer, Auth: authReducer}),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      autoPause: true,
      features: {
        pause: false,
        lock: true,
        persist: true,
      },
    }),
    PageModule,
    EffectsModule.forRoot([]),
    MaterialModule,
    NgxSpinnerModule.forRoot()
  ],
  exports: [
    SharedModule,
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        hasBackdrop: true,
        width:'600px',
        disableClose:true,
        panelClass:'p-4'
      } as MatDialogConfig
    },
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
