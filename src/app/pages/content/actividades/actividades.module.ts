import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActividadesRoutingModule } from './actividades-routing.module';
import {ConsultaComponent} from './consulta/consulta.component';
import {DxDataGridModule, DxTagBoxModule, DxTextAreaModule} from "devextreme-angular";


@NgModule({
  declarations: [ConsultaComponent],
  imports: [
    CommonModule,
    DxDataGridModule,
    DxTextAreaModule,
    DxTagBoxModule,
    ActividadesRoutingModule
  ]
})
export class ActividadesModule { }
