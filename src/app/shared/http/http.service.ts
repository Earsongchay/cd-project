import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http:HttpClient) { }
  get<T>(path?: string): Observable<T> {
    return this.http.get<T>(`${environment.HOST_URL}${path}`)
  }
  getFullPath<T>(url?: string): Observable<T> {
    return this.http.get<T>(`${url}`)
  }
  getImage(path: string): Observable<ArrayBuffer> {
    return this.http.get(`${environment.HOST_URL}${path}`, {
      responseType: 'arraybuffer',
    })
  }
  post<T, U>(path: string, body: U): Observable<T> {
    return this.http.post<T>(`${environment.HOST_URL}${path}`, body)
  }

  postImage<U>(path: string, body: U): Observable<string> {
    return this.http.post(`${environment.HOST_URL}${path}`, body,{
      observe:'body',
      responseType:'text'
    })
  }

  postFullPath<T, U>(path: string, body: U): Observable<T> {
    return this.http.post<T>(`${path}`, body)
  }
  put<T, U>(path: string, body: U): Observable<T> {
    return this.http.put<T>(`${environment.HOST_URL}${path}`, body)
  }
  patch<T, U>(path: string, body: U): Observable<T> {
    return this.http.patch<T>(`${environment.HOST_URL}${path}`, body)
  }
  deleteWithBody<T, U>(path: string, body?: U): Observable<T> {
    return this.http.delete<T>(`${environment.HOST_URL}${path}`, {
      body,
    })
  }
  delete<T>(path: string): Observable<T> {
    return this.http.delete<T>(`${environment.HOST_URL}${path}`)
  }
}
