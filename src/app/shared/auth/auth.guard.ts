import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {Store} from "@ngrx/store";
import {selectUser} from "../state-manager/auth/auth.selector";
import {NgxSpinnerService} from "ngx-spinner";

export const authGuard: CanActivateFn = (route, state) => {
  const loading = inject(NgxSpinnerService)
  loading.show('loading')
  return true;
};

const checkAuth = ()=>{
  const store = inject(Store)
  store.select(selectUser).subscribe(
    data=>{
      console.log(data)
    }
  )
  return true
}
