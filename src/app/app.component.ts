import {Component, OnInit} from '@angular/core';
import {DarkService} from "./shared/dark.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

  constructor(private darkService:DarkService) {
  }

  darkClass = 'light'
  ngOnInit() {
    this.darkService.darkMode.subscribe(data=> this.darkClass =data)
  }
}
