import {Component, EventEmitter, Input, Output, signal} from '@angular/core';
import {environment} from "../../../environments/environment.development";

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  @Input() name = '';
  @Input() imageName = signal('')
  basePath = environment.HOST_URL+'/image/'
  show =true;

  ngOnChanges() {
    this.imageName.set(this.name)
  }
}
