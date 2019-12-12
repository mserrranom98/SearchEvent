import {Component, OnInit} from '@angular/core';
import {RegionesService} from '../../../../shared/services/regiones/regiones.service';
import {Regiones} from '../../../../shared/models/regiones/regiones.model';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html'
})
export class ConsultaComponent implements OnInit {

  regiones: Regiones[] = [];

  constructor(
    private regionesService: RegionesService
  ) {
    this.regiones = this.regionesService.getRegiones();
  }

  ngOnInit() {
  }

}
