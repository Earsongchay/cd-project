import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {DarkService} from "../../shared/dark.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  constructor(private darkService:DarkService) {}

  darkIcon = ''

  ngOnInit() {
    this.darkService.darkMode.subscribe(data => this.darkIcon =data)
  }

  toggleDark() {
    this.darkService.toggleDark();
  }
}
