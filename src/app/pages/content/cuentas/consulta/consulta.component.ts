import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html'
})
export class ConsultaComponent implements OnInit {

  employees = [{
    ID: 1,
    Nombre: 'John',
    Apellido: 'Heart',
    Rut: '1-9',
    Correo: 'admin@prueba.cl',
    Estado: '1',
    Contraseña: '1234',
    Perfil: '3',
  }, {
    ID: 2,
    Nombre: 'Robert',
    Apellido: 'Reagan',
    Rut: '1-9',
    Correo: 'trabajador@prueba.cl',
    Estado: '2',
    Contraseña: '1234',
    Perfil: '1',
  }, {
    ID: 3,
    Nombre: 'Greta',
    Apellido: 'Sis',
    Rut: '1-9',
    Correo: 'trabajador@prueba.cl',
    Estado: '1',
    Contraseña: '1234',
    Perfil: '1',
  }, {
    ID: 4,
    Nombre: 'Brett',
    Apellido: 'Wade',
    Rut: '1-9',
    Correo: 'admin@prueba.cl',
    Estado: '1',
    Contraseña: '1234',
    Perfil: '3',
  }, {
    ID: 5,
    Nombre: 'Sandra',
    Apellido: 'Johnson',
    Rut: '1-9',
    Correo: 'organizador@prueba.cl',
    Estado: '1',
    Contraseña: '1234',
    Perfil: '2',
  }, {
    ID: 6,
    Nombre: 'Kevin',
    Apellido: 'Carter',
    Rut: '1-9',
    Correo: 'trabajador@prueba.cl',
    Estado: '2',
    Contraseña: '1234',
    Perfil: '3',
  }, {
    ID: 7,
    Nombre: 'Cynthia',
    Apellido: 'Stanwick',
    Rut: '1-9',
    Correo: 'trabajador@prueba.cl',
    Estado: '1',
    Contraseña: '1234',
    Perfil: '3',
  }, {
    ID: 8,
    Nombre: 'Kent',
    Apellido: 'Samuelson',
    Rut: '1-9',
    Correo: 'trabajador@prueba.cl',
    Estado: '1',
    Contraseña: '1234',
    Perfil: '3',
  }, {
    ID: 9,
    Nombre: 'Taylor',
    Apellido: 'Riley',
    Rut: '1-9',
    Correo: 'trabajador@prueba.cl',
    Estado: '1',
    Contraseña: '1234',
    Perfil: '3',
  }];

  Estado = [{
    ID: '1',
    Name: 'Habilitado'
  }, {
    ID: '2',
    Name: 'Deshabilitado'
  }];

  Perfil = [{
    ID: '1',
    Name: 'Trabajador'
  }, {
    ID: '2',
    Name: 'Organizador'
  }, {
    ID: '3',
    Name: 'Administrador'
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
