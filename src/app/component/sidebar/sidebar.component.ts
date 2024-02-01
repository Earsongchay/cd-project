import { BreakpointObserver } from '@angular/cdk/layout';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Store } from '@ngrx/store';
import { openSidebarAction } from 'src/app/shared/state-manager/sidebar/open-sidebar.action';
import { selectOpenSideBar } from 'src/app/shared/state-manager/sidebar/open-sidebar.selector';
import { MENU_DATA, MenuNode } from './menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{

  isOpen = true
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile= true;

  constructor(private observer: BreakpointObserver,private store: Store){
    this.dataSource.data = MENU_DATA;
  }

  ngOnInit(): void {
    this.store.select(selectOpenSideBar).subscribe(sidebar => {
      this.isOpen = sidebar.isOpen
    })

    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile= true;
        this.store.dispatch(openSidebarAction({isOpen : !this.isMobile}))
      } else {
        this.isMobile= false;
        this.store.dispatch(openSidebarAction({isOpen : !this.isMobile}))
      }
    });
  }

  private transformer = (node: MenuNode, level: number) => ({
    expandable: !!node.children && node.children.length > 0,
    name: node.name,
    icon: node.icon,
    level,
    link: node.link,
  });

  treeControl = new FlatTreeControl<SideMenuNode>(
    (node) => node.level,
    (node) => node.expandable,
  );


  treeFlattener = new MatTreeFlattener(
    this.transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: SideMenuNode): boolean => node.expandable;
}

export interface SideMenuNode {
  name: string;
  level: number;
  expandable: boolean;
}

