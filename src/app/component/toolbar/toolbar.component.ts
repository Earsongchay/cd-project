import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { openSidebarAction } from 'src/app/shared/state-manager/sidebar/open-sidebar.action';
import { selectOpenSideBar } from 'src/app/shared/state-manager/sidebar/open-sidebar.selector';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit{
  isOpen = true
  constructor(private store:Store){}

  ngOnInit(): void {
    this.store.select(selectOpenSideBar).subscribe(sidebar =>{
        this.isOpen = sidebar.isOpen
    })
  }

  openSideBar() {
    this.isOpen = !this.isOpen
    this.store.dispatch(openSidebarAction({isOpen : this.isOpen}))
  }
}
