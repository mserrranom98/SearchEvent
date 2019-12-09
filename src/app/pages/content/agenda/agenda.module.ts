import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import {ConsultaComponent} from './consulta/consulta.component';
import {DxButtonModule, DxDateBoxModule, DxFormModule, DxSchedulerModule, DxTemplateModule} from 'devextreme-angular';
import {FullCalendarModule} from '@fullcalendar/angular';


@NgModule({
  declarations: [ConsultaComponent],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    DxButtonModule,
    DxDateBoxModule,
    DxFormModule,
    DxTemplateModule,
    FullCalendarModule
  ]
})
export class AgendaModule { }
