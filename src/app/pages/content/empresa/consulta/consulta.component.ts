import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html'
})
export class ConsultaComponent implements OnInit {

  popupVisible = false;
  popupVisible1 = false;

  empresa = {
    ID: 1,
    Nombre: 'Estadio',
    Ocupacion: 'Entretenimiento',
    Correo: 'managevent@managevent.cl',
    Encargado: 'Maria Ulloa Ulloa',
    Direccion: 'Av. Vicuña Mackena 6565',
    Cuidad: 'Santiago',
    Region: 'San Joaquin',
    Telefono: '226851000',
    Descripcion: 'Empresa encargada de generar software para empresas generadoras de eventos'
  };

  constructor() { }

  ngOnInit() {
  }

  solicitudUpdate() {
    this.popupVisible = true;
  }

  modificarLogo() {
    this.popupVisible1 = true;
  }
  prueba(){}

}
