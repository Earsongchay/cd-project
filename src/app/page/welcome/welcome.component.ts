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
  constructor(private http:HttpClient) {}
  login() {
    this.http.get('/api/isin',{
      headers:{
        Authorization: "Bearer eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI4IiwibmJmIjoxNzA4NDk1Mjk1LCJleHAiOjE3MDg1ODE2OTUsImlhdCI6MTcwODQ5NTI5NSwiaXNzIjoiRkFQQSIsInJvbGUiOiJBRE1JTiIsInBlcm1pc3Npb24iOjYzfQ.Np5my5HuYtS9M8ElP1i9jM0VUADIRCx5XrLPvBLyJZIq-fR6rlBnaBSfot4YszbCjTqq57uu5myiUlt7ECfmX1Au_-hAOsIVQc801-XdRnbAp2T9aeOCtVAVHfEXbl4c3qSRwJRMdW6TfbnerJvwdIJ798nNb8eDGA8xkeKw2MUiWmnUG5T1" +
          "CoW1GnEqC8Y3LjAgJ19jRq2qf_8WCP68xW9BHjW6QDrjGaWgrL14YagYb4cPNzMP0v0-1_XD-" +
          "V3KaR48JCgIGa1RUQ9JBHJ6Oc8QP4LAifQs618dDAE7LE8sKGBjB_bQc_ozQI3YpY8WV-_PtGlADkxv8iOo5F5MBQ"
      }
    }).subscribe(data=>{
      console.log(data)
    },error => {
      console.log(error)
    })
  }

}
