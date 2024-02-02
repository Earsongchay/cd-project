import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Store} from "@ngrx/store";
import {login} from "../../shared/state-manager/auth/auth.action";
import {
  isLoggedIn, selectError, selectUser,
} from "../../shared/state-manager/auth/auth.selector";
import {Observable} from "rxjs";
import {User} from "../../shared/state-manager/auth/auth.state";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent  {
  form:FormGroup

  isLoggedIn$: Observable<boolean>;
  user$: Observable<User | ''>;
  error$: Observable<any>;




  constructor(private store:Store) {
    this.form = new FormGroup({
      username: new FormControl('chay'),
      password: new FormControl('123')
    });

    this.isLoggedIn$ = this.store.select(isLoggedIn)
    this.user$ = this.store.select(selectUser);
    this.error$ = this.store.select(selectError);

    this.store.select(selectUser).subscribe(data =>{
      console.log(data)
    })
  }
  login() {
    this.store.dispatch(login({...this.form.value}));
  }

}
