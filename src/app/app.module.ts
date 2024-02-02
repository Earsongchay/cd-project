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

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    StoreModule.forRoot({sidebar: openSideBarReducer,Auth:authReducer}),
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
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
