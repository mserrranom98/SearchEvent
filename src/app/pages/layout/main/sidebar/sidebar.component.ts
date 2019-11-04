import { Component, OnInit } from '@angular/core';
import {MenusService} from '../../../../shared/services/menus/menus.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  private token: string;

  constructor(
    private menusService: MenusService
  ) {
    this.token = localStorage.getItem('token');
  }

  ngOnInit() {
    this.getMenus();
  }
  
  getMenus() {
    console.log(this.token);
    this.menusService.getMenus(this.token).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

}
