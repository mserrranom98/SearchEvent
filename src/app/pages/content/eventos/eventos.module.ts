import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import {ConsultaComponent} from './consulta/consulta.component';
import {DxDataGridModule} from "devextreme-angular";


@NgModule({
  declarations: [ConsultaComponent],
  imports: [
    CommonModule,
    EventosRoutingModule,
    DxDataGridModule
  ]
})
export class EventosModule { }
