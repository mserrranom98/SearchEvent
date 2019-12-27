import { Component, OnInit } from '@angular/core';
import {EmpresaService} from '../../../../shared/services/empresa/empresa.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html'
})
export class ConsultaComponent implements OnInit {

  private token: string;
  popupVisible = false;
  popupVisible1 = false;

  empresa = {};

  mensaje = {
    asunto: '',
    descripcion: ''
  };

  constructor(
    private empresaService: EmpresaService
  ) {
    this.token = localStorage.getItem('token');
  }

  ngOnInit() {
  }

  getEmpresa() {
    console.log('INICIO DE CONSULTA DE EMPRESA:');
    this.empresaService.getEmpresa(this.token).subscribe((response: any) => {
      console.log(response.message);
      if (response.code === '0') {
        this.empresa = response.empresa;
      }
    }, error => {
      console.log(error);
    });
  }

  updateEmpresa(event) {
    console.log('INICIO DE ACTUALIZACION DE EMPRESA:');
    this.empresaService.updateEmpresa(this.token, event.data).subscribe((response: any) => {
      console.log(response.message);
    }, error => {
      console.log(error);
    });
  }

  updateFile() {
    // const storageRef = firebase.storage().ref();
    // const storageRef = firebase.storage().ref();
  }

  enviar() {
    console.log('INICIO DE ENVIO DE MENSAJE:');
    this.empresaService.enviarSolicitud(this.token, this.mensaje).subscribe((response: any) => {
      console.log(response.message);
    }, error => {
      console.log(error);
    });
  }

  solicitudUpdate() {
    this.popupVisible = true;
  }

  modificarLogo() {
    this.popupVisible1 = true;
  }
}
