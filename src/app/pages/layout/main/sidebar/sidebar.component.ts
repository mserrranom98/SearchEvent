import { Component, OnInit } from '@angular/core';
import {MenusService} from '../../../../shared/services/menus/menus.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  private token: string;
  menus = [];

  constructor(
    private menusService: MenusService
  ) {
    this.token = localStorage.getItem('token');
  }

  ngOnInit() {
    this.getMenus();
  }
  
  getMenus() {
    console.log('INICIO DE CONSULTA DE MODULOS');
    this.menusService.getMenus(this.token).subscribe((response: any) => {
      console.log(response.message);
      // tslint:disable-next-line:only-arrow-functions
      this.menus = response.menus.sort(function(a, b) {
        if (a.orden > b.orden) {
          return 1;
        }
        if (a.orden < b.orden) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    }, error => {
      console.log(error);
    });
  }

}
