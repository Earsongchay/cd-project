import { NgModule } from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import {ListArtistComponent} from "./list-artist/list-artist.component";
import {ComponentModule} from "../../component/component.module";
import {AppModule} from "../../app.module";
import {CardComponent} from "../../component/card/card.component";
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
