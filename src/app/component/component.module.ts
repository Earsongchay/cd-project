import { NgModule } from '@angular/core';
import {CardComponent} from "./card/card.component";
import { ChooseProfileComponent } from './choose-profile/choose-profile.component';
import {JsonPipe, NgIf, NgOptimizedImage} from "@angular/common";
import { AvatarComponent } from './avatar/avatar.component';



@NgModule({
  declarations: [CardComponent, ChooseProfileComponent, AvatarComponent],
  imports: [
    NgOptimizedImage,
    JsonPipe,
    NgIf
  ],
  exports: [CardComponent, ChooseProfileComponent, AvatarComponent]
})
export class ComponentModule { }
