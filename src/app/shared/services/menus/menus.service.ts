import { Injectable } from '@angular/core';
import {GLOBAL_PATH} from '../../models/path/path';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  private path = GLOBAL_PATH.getPath;

  constructor(
    private http: HttpClient
  ) { }

  getMenus(idToken: string) {
    const body = {
      idToken
    };

    return this.http.post(this.path + 'getPath', body);
  }

}
