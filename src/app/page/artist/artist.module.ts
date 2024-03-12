import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ArtistRoutingModule } from './artist-routing.module';
import {ListArtistComponent} from "./list-artist/list-artist.component";
import {SharedModule} from "../../shared/shared.module";
import { FormArtistComponent } from './form-artist/form-artist.component';


@NgModule({
  declarations: [
    ListArtistComponent,
    FormArtistComponent
  ],
  imports: [
    ArtistRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class ArtistModule { }
