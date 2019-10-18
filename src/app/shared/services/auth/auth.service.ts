import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import {HttpClient} from '@angular/common/http';
import {GLOBAL_PATH} from '../../models/path/path';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private path = GLOBAL_PATH.getPath;

  constructor(
    private http: HttpClient
  ) {
  }

  isAuthenticated() {
    firebase.auth().currentUser.getIdToken(true).then((idToken: string) => {
      const body = {
        idToken
      };
      console.log(body);

      this.http.post(this.path + 'verificarToken', body).subscribe(res => {
        console.log(res);
      }, error => {
        console.log(error);
      });
    }).catch(error => {
      console.log(error);
    });
  }

  getToken() {
    firebase.auth().currentUser.getIdToken(true).then((idToken: string) => {
      console.log(idToken);
      return idToken;
    }).catch(error => {
      console.log(error);
    });

  }
}
