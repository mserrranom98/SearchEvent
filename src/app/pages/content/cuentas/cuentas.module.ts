import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuentasRoutingModule } from './cuentas-routing.module';
import { ConsultaComponent } from './consulta/consulta.component';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {DxDataGridModule} from 'devextreme-angular';
import { ChangePasswordComponent } from './change-password/change-password.component';
import {MatDialogModule} from '@angular/material';

@NgModule({
  declarations: [ConsultaComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    CuentasRoutingModule,
    DxDataGridModule,
    MatDialogModule
  ],
  entryComponents: [ChangePasswordComponent]
})
export class CuentasModule { }
