import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DarkService {

  private darkMode$ = new BehaviorSubject('')
  public darkMode = this.darkMode$.asObservable()

  constructor() {
    this.darkMode$.next(localStorage.getItem('darkMode') ?? 'light')
  }

  toggleDark() {
    if (localStorage.getItem('darkMode') && localStorage.getItem('darkMode') === 'dark'){
      localStorage.setItem('darkMode','light')
      this.darkMode$.next('light')
    }else{
      localStorage.setItem('darkMode','dark')
      this.darkMode$.next('dark')
    }
  }
}
