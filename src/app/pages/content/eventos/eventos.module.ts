import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import {ConsultaComponent} from './consulta/consulta.component';
import {DxDataGridModule} from "devextreme-angular";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatStepperModule} from "@angular/material";


@NgModule({
  declarations: [ConsultaComponent],
  imports: [
    CommonModule,
    EventosRoutingModule,
    MatStepperModule,
    DxDataGridModule
  ]
})
export class EventosModule { }
