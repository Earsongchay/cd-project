import {Component, OnInit} from '@angular/core';
import {DarkService} from "./shared/dark.service";
import {NgxSpinnerService} from "ngx-spinner";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

  constructor(private darkService:DarkService,private spinner: NgxSpinnerService) {
  }

  darkClass = 'light'
  ngOnInit() {
    this.spinner.show('loading');

    setTimeout(() => {
      this.spinner.hide('loading');
    }, 500);
    this.darkService.darkMode.subscribe(data=> this.darkClass =data)
  }
}
