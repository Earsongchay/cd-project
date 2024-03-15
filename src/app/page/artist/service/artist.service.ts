import {Injectable, signal, WritableSignal} from '@angular/core';
import {HttpService} from "../../../shared/http/http.service";
import {PaginateRequest, PaginateResponse} from "../../../shared/Model/PaginateRequest";
import {buildParam} from "../../../shared/function/build-param";

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  constructor(private http:HttpService) { }

  getList(body:PaginateRequest){
    const params = new URLSearchParams(buildParam({...body}))
    return this.http.get<ArtistPaginateResponse>(`/artist?${params}`)
  }

  addArtist(body:ArtistCreateRequest){
    return this.http.post<Artist,ArtistCreateRequest>(`/artist`,body)
  }

  updateArtist(id:number,body:ArtistCreateRequest){
    return this.http.patch<Artist,ArtistCreateRequest>(`/artist/${id}`,body)
  }

  uploadImage(img:any){
    const formData = new FormData();
    formData.append('image', img);
    return this.http.postImage('/image',formData)
  }
  getImage(name:string){
    return this.http.get<any>(`/artist/${name}`)
  }
}

export interface ArtistPaginateResponse extends PaginateResponse<Artist>{}
export interface ArtistCreateRequest {
  firstName:string,
  lastName:string,
  akaName?:string,
  socialMedia:string,
  description:string,
  dateOfBirth:Date |string,
  id:number,
  fileName:string,
  createdAt: string | Date;
  lastModifiedAt: string | Date;
}

interface Genre {
  id: number;
  createdAt: string;
  lastModifiedAt: string;
  genreName: string;
}

export interface Artist extends ArtistCreateRequest{
  albums: AlumTrackDto[];
}

interface Track {
  id: number;
  createdAt: string;
  lastModifiedAt: string;
  trackTitle: string;
  duration: string;
  genre: Genre;
  artist: Artist;
  album: string;
}

export interface AlumTrackDto {
  inStock: boolean,
  stockQuantity: number,
  albumTitle: string,
  albumDuration: number,
  tracksQuantity: number,
  tracks: TrackDto[]
}

export interface TrackDto{
  id: number;
  trackTitle: string;
  duration: string;
  genre?: Genre;
  lyrics:string;
  releaseDate: string | Date
}


interface Album {
  id: number;
  createdAt: string;
  lastModifiedAt: string;
  inStock: boolean;
  stockQuantity: number;
  albumTitle: string;
  albumDuration: number;
  tracksQuantity: number;
  artist: Artist;
  tracks: Track[];
}
