import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuentasRoutingModule } from './cuentas-routing.module';
import { ConsultaComponent } from './consulta/consulta.component';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {DxButtonModule, DxDataGridModule, DxFormModule, DxPopupModule} from 'devextreme-angular';

@NgModule({
  declarations: [ConsultaComponent],
  imports: [
    CommonModule,
    CuentasRoutingModule,
    DxDataGridModule,
    DxFormModule,
    DxPopupModule,
    DxButtonModule
  ]
})
export class CuentasModule { }
