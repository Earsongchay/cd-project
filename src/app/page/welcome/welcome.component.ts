import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../shared/auth/auth.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent  {
  form:FormGroup
  constructor(private authService:AuthService) {
    this.form = new FormGroup({
      username: new FormControl('chay'),
      password: new FormControl('123')
    });
  }


  login() {
    if (this.form){
      this.authService.login(this.form.value).subscribe({
        next: data => {
          console.log(data)
        },
        error: (err) => {
          console.log(err)
        }

        }
      )
    }
  }
}
