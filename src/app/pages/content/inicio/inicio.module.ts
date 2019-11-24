import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import {ConsultaComponent} from './consulta/consulta.component';
import {DxChartModule, DxDataGridModule, DxFormModule} from "devextreme-angular";
import {NbChatModule} from '@nebular/theme';


@NgModule({
  declarations: [ConsultaComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    DxDataGridModule,
    DxFormModule,
    DxChartModule,
    NbChatModule
  ]
})
export class InicioModule { }
