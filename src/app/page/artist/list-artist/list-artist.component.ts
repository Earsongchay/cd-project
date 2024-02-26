import {Component, OnInit} from '@angular/core';
import {ArtistService} from "../service/artist.service";
import {PaginateRequest} from "../../../shared/Model/PaginateRequest";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {FormArtistComponent} from "../form-artist/form-artist.component";

@Component({
  selector: 'app-list-artist',
  templateUrl: './list-artist.component.html',
  styleUrls: ['./list-artist.component.scss'],
})
export class ListArtistComponent implements OnInit{
  displayedColumns = ['id','firstname','groupName','totalAlbum'];
  dataSource: any;
  paginateRequest:PaginateRequest = {
    page:1,
    size:10,
  }
  constructor(private artistService:ArtistService,private dialog:MatDialog) {}
  ngOnInit() {
    this.artistService.getList(this.paginateRequest).subscribe({
      next:data => {
        this.dataSource = new MatTableDataSource(data.content.map(r => ({...r,totalAlbum: r.albums.length})))
    },
      error : (e)=>{
        console.log(e)
      }
  })

  }

  openAddDialog(){
    this.dialog.open(FormArtistComponent,{
      disableClose:true,
      width:'600px',
      height:'600px'
    })
  }
}
