import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Store} from "@ngrx/store";
import {login} from "../../shared/state-manager/auth/auth.action";
import {
  isLoggedIn, selectError, selectUser,
} from "../../shared/state-manager/auth/auth.selector";
import {Observable} from "rxjs";
import {User} from "../../shared/state-manager/auth/auth.state";
import {HttpClient} from "@angular/common/http";
import {data} from "autoprefixer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent  {
  form:FormGroup

  constructor(private router:Router) {}
  login() {
    this.router.navigateByUrl('/dashboard')
  }

}
