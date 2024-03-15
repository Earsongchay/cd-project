import {Component, EventEmitter, Input, OnChanges, Output, signal} from '@angular/core';
import {environment} from "../../../environments/environment.development";

@Component({
  selector: 'app-choose-profile',
  templateUrl: './choose-profile.component.html',
  styleUrls: ['./choose-profile.component.scss']
})
export class ChooseProfileComponent implements OnChanges{
  @Input() name = '';
  @Input() imageName = signal('')
  @Output() imageChange = new EventEmitter()
  basePath = environment.HOST_URL+'/image/'
  show =true;

  ngOnChanges() {
    this.imageName.set(this.name)
  }

  uploadImage($event:any){
    this.imageChange.emit($event.target.files[0])
  }
}
