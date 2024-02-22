import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import {ListArtistComponent} from "./list-artist/list-artist.component";


@NgModule({
  declarations: [
    ListArtistComponent
  ],
  imports: [
    CommonModule,
    ArtistRoutingModule
  ]
})
export class ArtistModule { }
