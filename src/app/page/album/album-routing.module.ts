import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlbumComponent} from "./album.component";

const routes: Routes = [
  {
    path:'',
    redirectTo:'list',
    pathMatch:'full',

  },
  {
    path:'list',
    component:AlbumComponent,
    data:{
      breadcrumb:'list'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
