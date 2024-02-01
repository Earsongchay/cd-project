import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http:HttpClient) { }

  buildParam(param: any): any {
    if (!param) {
      return {}
    }
    const keys = Object.keys(param).filter(
      (key) => param[key] != null && param[key] != undefined && param[key] != ''
    )
    const result: any = {}
    keys.forEach((key) => {
      result[key] = param[key]
    })

    return result
  }
  get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${environment.HOST_URL}${url}`)
  }
  getImage(url: string): Observable<ArrayBuffer> {
    return this.http.get(`${environment.HOST_URL}${url}`, {
      responseType: 'arraybuffer',
    })
  }
  post<T, U>(url: string, body: U): Observable<T> {
    return this.http.post<T>(`${environment.HOST_URL}${url}`, body)
  }
  put<T, U>(url: string, body: U): Observable<T> {
    return this.http.put<T>(`${environment.HOST_URL}${url}`, body)
  }
  patch<T, U>(url: string, body: U): Observable<T> {
    return this.http.patch<T>(`${environment.HOST_URL}${url}`, body)
  }
  deleteWithBody<T, U>(url: string, body?: U): Observable<T> {
    return this.http.delete<T>(`${environment.HOST_URL}${url}`, {
      body,
    })
  }
  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${environment.HOST_URL}${url}`)
  }
}
