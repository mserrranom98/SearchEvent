import {Sectores} from '../sectores/sectores.model';

export class ServiciosVenta {

  cantidad: number;
  nombre: string;
  precio: number;

}

export class Servicios {

  cantidad: number;
  nombre: string;
  precio: number;
  sector: Sectores;
  capacidad: number;

}
