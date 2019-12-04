import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  employees = [{
    ID: 1,
    Nombre: 'John',
    FechaInicio: '01-01-2020',
    FechaTermino: '02-05-2020',
    Trabajador: 'Juan',
    Estado: '1',
    Descripcion: 'Test',
  }, {
    ID: 2,
    Nombre: 'Robert',
    FechaInicio: '01-01-2020',
    FechaTermino: '02-05-2020',
    Trabajador: 'trabajador@prueba.cl',
    Estado: '2',
    Descripcion: '1234',
  }, {
    ID: 3,
    Nombre: 'Greta',
    FechaInicio: '01-01-2020',
    FechaTermino: '02-05-2020',
    Trabajador: 'trabajador@prueba.cl',
    Estado: '3',
    Descripcion: '1234',
  }, {
    ID: 4,
    Nombre: 'Brett',
    FechaInicio: '01-01-2020',
    FechaTermino: '02-05-2020',
    Trabajador: 'admin@prueba.cl',
    Estado: '4',
    Descripcion: '1234',
  }, {
    ID: 5,
    Nombre: 'Sandra',
    FechaInicio: '01-01-2020',
    FechaTermino: '02-05-2020',
    Trabajador: 'organizador@prueba.cl',
    Estado: '1',
    Descripcion: '1234',
  }, {
    ID: 6,
    Nombre: 'Kevin',
    FechaInicio: '01-01-2020',
    FechaTermino: '02-05-2020',
    Trabajador: 'trabajador@prueba.cl',
    Estado: '2',
    Descripcion: '1234',
  }, {
    ID: 7,
    Nombre: 'Cynthia',
    FechaInicio: '01-01-2020',
    FechaTermino: '02-05-2020',
    Trabajador: 'trabajador@prueba.cl',
    Estado: '1',
    Descripcion: '1234',
  }, {
    ID: 8,
    Nombre: 'Kent',
    FechaInicio: '01-01-2020',
    FechaTermino: '02-05-2020',
    Trabajador: 'trabajador@prueba.cl',
    Estado: '1',
    Descripcion: '1234',
  }, {
    ID: 9,
    Nombre: 'Taylor',
    FechaInicio: '01-01-2020',
    FechaTermino: '02-05-2020',
    Trabajador: 'trabajador@prueba.cl',
    Estado: '1',
    Descripcion: '1234',
  }];

  Estado = [{
    ID: '1',
    Name: 'Creado'
  }, {
    ID: '2',
    Name: 'Finalizado'
  }, {
    ID: '3',
    Name: 'Completado'
  }, {
    ID: '4',
    Name: 'Deshabilitado'
  }];

  constructor() { }

  ngOnInit() {
  }

}
