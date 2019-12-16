import {Sectores} from '../sectores/sectores.model';

export class Establecimientos {

  id: string;
  cantidad: number;
  estado: boolean;
  nombre: string;
  ubicacion: string;
  region: string;
  comuna: string;
  sectores: Sectores[];

}
