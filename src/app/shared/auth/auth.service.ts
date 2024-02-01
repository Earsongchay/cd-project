import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http :HttpClient) { }
  login(body: LoginRequest)  {
    const requestBody = {
      ...body,
      client_id: environment.KEYCLOAK.clientId,
      grant_type: environment.KEYCLOAK.grant_type
    }

    const urlEncodeBody = this.objectToFormData(requestBody);

    return this.http.post(
      `${environment.KEYCLOAK.URL}/realms/${environment.KEYCLOAK.realm}/protocol/openid-connect/token`,
      urlEncodeBody,
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
        observe: 'response',
      },)
  }

  objectToFormData(obj: any): string {
    const searchParams = new URLSearchParams();
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        searchParams.set(key, obj[key]);
      }
    }

    return searchParams.toString();
  }
}
export interface LoginRequest {
  username: string,
  password: string,
  client_id?: string,
  grant_type?: string
}
