import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./page/dashboard/dashboard.component";
import {authGuard} from "./shared/auth/auth.guard";
import {WelcomeComponent} from "./page/welcome/welcome.component";

const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[authGuard]
  },
  {
    path:'login',
    component:WelcomeComponent,
    canActivate:[authGuard]
  },
  {
    path:'employee',
    loadChildren: () =>
      import('./page/page.module').then((m) => m.PageModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
