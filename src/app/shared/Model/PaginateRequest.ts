import {SortDirection} from "@angular/material/sort";
export interface PaginateRequest{
  page:number,
  size:number,
  sortBy?:string,
  direction?:SortDirection,
  search?:string
}
export interface PaginateResponse<T> {
  total: number;
  page: number;
  pageSize: number;
  content: T[];
}
