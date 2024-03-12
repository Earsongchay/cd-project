import {Component, OnInit} from '@angular/core';
import {AlbumService} from "./service/album.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit{
  displayedColumns = ['albumTitle','albumDuration','tracksQuantity','stockQuantity','isInStock','createdAt','action'];
  dataSource: any;
  constructor(private albumService:AlbumService) {
  }

  ngOnInit() {
    this.getAlbum()
  }

  getAlbum(){
    this.albumService.getAlbum().subscribe({
      next:(data)=>{
        this.dataSource = new MatTableDataSource(data)
      }
    })
  }
}
