import {Component, OnInit} from '@angular/core';
import {Trabajadores} from '../../../../shared/models/trabajadores/trabajadores.model';
import {TrabajadoresService} from '../../../../shared/services/trabajadores/trabajadores.service';
import {PerfilesService} from '../../../../shared/services/perfiles/perfiles.service';
import {MatDialog} from '@angular/material';
import {ChangePasswordComponent} from '../change-password/change-password.component';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html'
})
export class ConsultaComponent implements OnInit {

  private token: string;
  trabajadores: Trabajadores[] = [];
  estados = [
    {value: 'Habilitado', id: true},
    {value: 'Deshabilitado', id: false}
  ];
  perfiles = [];

  viewTable = false;

  constructor(
    private trabajadoresService: TrabajadoresService,
    public dialog: MatDialog,
    private perfilesService: PerfilesService
  ) {
    this.token = localStorage.getItem('token');
  }

  ngOnInit() {
    this.getTrabajadores();
  }

  getTrabajadores() {
    console.log('INICIO DE CONSULTA DE TRABAJADORES:');
    this.trabajadoresService.getTrabajadores(this.token).subscribe((response: any) => {
      console.log(response);
      if (response.code === '0') {
        this.trabajadores = response.trabajadores;
        this.getPerfiles();
        this.viewTable = true;
      }
      console.log(response.message);
    }, error => {
      console.log(error);
    });
  }

  getPerfiles() {
    console.log('INICIO DE CONSULTA DE PERFILES:');
    this.perfilesService.getPerfilesActivo(this.token).subscribe((response: any) => {
      if (response.code === '0') {
        this.perfiles = response.perfiles;
        this.viewTable = true;
      }
      console.log(response.message);
    }, error => {
      console.log(error);
    });
  }

  updateTrabajador(event) {
    console.log('INICIO DE ACTUALIZACION DE TRABAJADOR:');
    this.trabajadoresService.updateTrabajador(this.token, event.data).subscribe((response: any) => {
      console.log(response.message);
    }, error => {
      console.log(error);
    });
  }

  addTrabajador(event) {
    console.log('INICIO DE CREACION DE TRABAJADOR:');
    this.trabajadoresService.addTrabajador(this.token, event.data).subscribe((response: any) => {
      console.log(response.message);
    }, error => {
      console.log(error);
    });
  }

  openChangePassword(event) {
    this.dialog.open(ChangePasswordComponent, {data: event.data});
  }

  validarTrabajador(e) {
    if (e.isValid && this.trabajadores.filter((item) => item.rut === e.newData.rut).length > 0) {
      e.isValid = false;
      e.errorText = 'El rut del trabajador ya existe';
    }
  }

  onEditorPreparing(e) {
    if (e.row) {
      if (e.row.inserted && e.dataField === 'estado') {
        e.editorOptions.value = true;
        e.editorOptions.disabled = true;
      }
    }
  }

}
