import { Injectable } from '@angular/core';
import {GLOBAL_PATH} from '../../models/path/path';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerfilesService {

  private path = GLOBAL_PATH.getPath;

  constructor(
    private http: HttpClient
  ) { }

  getPerfilesActivo(idToken: string) {
    const body = {
      idToken
    };

    return this.http.post(this.path + 'getPerfilesActivo', body);
  }
}
