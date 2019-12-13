import {Component, OnInit} from '@angular/core';
import {RegionesService} from '../../../../shared/services/regiones/regiones.service';
import {Regiones} from '../../../../shared/models/regiones/regiones.model';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html'
})
export class ConsultaComponent implements OnInit {

  establecimientos = [
    {
      Nombre: 'Prueba',
      Capacidad: '123',
      Ubicacion: 'Av. Vicuña Mackena 6565',
      Region: 'San Joaquin',
      Ciudad: 'Santiago',
      Estado: true,
      sectores: [
        {
          Nombre: 'Cancha',
          Capacidad: 200
        },
        {
          Nombre: 'Galeria',
          Capacidad: 200
        },
        {
          Nombre: 'Gradas',
          Capacidad: 200
        }
      ]
    },
    {
      Nombre: 'Prueba2',
      Capacidad: '123',
      Ubicacion: 'Av. Vicuña Mackena 6565',
      Region: 'San Joaquin',
      Ciudad: 'Santiago',
      Estado: false
    },
    {
      Nombre: 'Prueba3',
      Capacidad: '123',
      Ubicacion: 'Av. Vicuña Mackena 6565',
      Region: 'San Joaquin',
      Ciudad: 'Santiago',
      Estado: true
    },
    {
      Nombre: 'Prueba4',
      Capacidad: '123',
      Ubicacion: 'Av. Vicuña Mackena 6565',
      Region: 'San Joaquin',
      Ciudad: 'Santiago',
      Estado: false
    }
  ];

  estados = [
    {
      ID: true,
      Name: 'Habilitado'
    },
    {
      ID: false,
      Name: 'Deshabilitado'
    }
  ];

  regiones: Regiones[] = [];

  constructor(
    private regionesService: RegionesService
  ) {
    this.regiones = this.regionesService.getRegiones();
  }

  ngOnInit() {
  }

}
