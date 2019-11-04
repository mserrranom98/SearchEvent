import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarComponent} from '../pages/layout/main/sidebar/sidebar.component';
import {NavbarComponent} from '../pages/layout/main/navbar/navbar.component';
import {FooterComponent} from '../pages/layout/main/footer/footer.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
