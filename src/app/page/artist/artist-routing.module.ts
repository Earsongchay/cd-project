import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListArtistComponent} from "./list-artist/list-artist.component";

const routes: Routes = [
  {
    path:'',
    redirectTo:'list',
    pathMatch:'full',

  },
  {
    path:'list',
    component:ListArtistComponent,
    data:{
      breadcrumb:'list'
    }
  },
  {
    path:'create',
    component:ListArtistComponent,
    data:{
      breadcrumb:'create'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule { }
