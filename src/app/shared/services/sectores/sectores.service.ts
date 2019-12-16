import { Injectable } from '@angular/core';
import {GLOBAL_PATH} from '../../models/path/path';
import {HttpClient} from '@angular/common/http';
import {Sectores} from '../../models/sectores/sectores.model';

@Injectable({
  providedIn: 'root'
})
export class SectoresService {

  private path = GLOBAL_PATH.getPath;

  constructor(
    private http: HttpClient
  ) { }

  updateSector(idToken: string, sector: Sectores) {
    const body = {
      idToken,
      sector
    };

    return this.http.post(this.path + 'updateSector', body);
  }

  addSector(idToken: string, sector: Sectores) {
    const body = {
      idToken,
      sector
    };

    return this.http.post(this.path + 'addSector', body);
  }
}
