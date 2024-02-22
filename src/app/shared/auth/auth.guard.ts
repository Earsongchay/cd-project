import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {Store} from "@ngrx/store";
import {selectUser} from "../state-manager/auth/auth.selector";

export const authGuard: CanActivateFn = (route, state) => {
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
