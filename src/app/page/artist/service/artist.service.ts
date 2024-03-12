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
}

export interface ArtistPaginateResponse extends PaginateResponse<Artist>{}
export interface ArtistCreateRequest {
  firstname:string,
  lastname:string,
  groupName?:string
}

interface Genre {
  id: number;
  createdAt: string;
  lastModifiedAt: string;
  genreName: string;
}

export interface Artist {
  id: number;
  createdAt: string;
  lastModifiedAt: string;
  firstname: string;
  lastname: string;
  groupName: string;
  albums: string[];
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
