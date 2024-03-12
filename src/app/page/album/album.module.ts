import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {CommonModule} from "@angular/common";
import {AlbumRoutingModule} from "./album-routing.module";
import {AlbumComponent} from "./album.component";
import { FormAlbumComponent } from './form-album/form-album.component';

@NgModule({
  declarations: [
    AlbumComponent,
    FormAlbumComponent
  ],
  imports: [
    AlbumRoutingModule,
    SharedModule,
    CommonModule
  ],
  exports:[AlbumComponent]
})
export class ArtistModule { }
