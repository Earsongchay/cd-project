import { Injectable } from '@angular/core';
import {HttpService} from "../../../shared/http/http.service";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpService) { }

  getAlbum(){
    return this.http.get<AlbumModel[]>(`/album`)
  }

  saveAlbum(body:AlbumModel){
    return this.http.post<AlbumModel,AlbumModel>(`/album`,body)
  }

}

export interface AlbumModel{

}
