import {AfterViewInit, Component, effect, signal, ViewChild, WritableSignal} from '@angular/core';
import {Artist, ArtistService} from "../service/artist.service";
import {PaginateRequest} from "../../../shared/Model/PaginateRequest";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {FormArtistComponent} from "../form-artist/form-artist.component";
import {NgxSpinnerService} from "ngx-spinner";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-list-artist',
  templateUrl: './list-artist.component.html',
  styleUrls: ['./list-artist.component.scss'],
})

export class ListArtistComponent implements AfterViewInit{
  displayedColumns = ['id','firstname','groupName','totalAlbum','action'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator!:MatPaginator

  total = signal(0)
  paginateRequest:WritableSignal<PaginateRequest> = signal({
    page: 0,
    size: 15,
  })

  constructor(private artistService:ArtistService,private dialog:MatDialog,private spinner:NgxSpinnerService) {
    this.spinner.show('loading')
    effect(() =>{
      this.fetchArtist()
    })
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe(
      data=>{
        this.paginateRequest.update((d) =>({
            ...d,
            page:data.pageIndex,
            size:data.pageSize
        }))
      }
    )
  }

  fetchArtist(){
    this.artistService.getList(this.paginateRequest()).subscribe({
      next:data => {
        this.dataSource = new MatTableDataSource(data.content.map(r => ({...r,totalAlbum: r.albums.length})))
        this.spinner.hide('loading')
        this.total.set(data.total)
      },
      error : (e)=>{
        console.log(e)
      }
    })
  }

  openAddDialog(){
    this.dialog.open(FormArtistComponent,{
      width:'600px',
    }).afterClosed().subscribe(
      data =>{
        if (data){
          this.fetchArtist()
        }
      }
    )
  }

  modifyData(element:Artist) {
    this.dialog.open(FormArtistComponent,{
      data:element,
      width:'600px'
    }).afterClosed().subscribe(
      data =>{
        if (data){
          this.fetchArtist()
        }
      }
    )
  }
}
