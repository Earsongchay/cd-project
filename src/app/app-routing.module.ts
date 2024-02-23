import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./page/dashboard/dashboard.component";
import {authGuard} from "./shared/auth/auth.guard";
import {WelcomeComponent} from "./page/welcome/welcome.component";

const routes: Routes = [
  {
    path:'',
    redirectTo: 'dashboard',
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    data:{
      breadcrumb:'dashboard'
    }
  },
  {
    path:'login',
    component:WelcomeComponent,
  },
  {
    path:'list-artist',
    data:{
      breadcrumb:'artist'
    },
    loadChildren: () =>
      import('./page/artist/artist.module').then((m) => m.ArtistModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
