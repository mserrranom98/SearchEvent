import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MainComponent} from './pages/layout/main/main.component';
import {SesionComponent} from './pages/layout/sesion/sesion.component';
import {SharedModule} from './shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';
import {AuthGuardService} from './shared/services/auth/auth-guard.service';

import * as firebase from 'firebase';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SesionComponent
  ],
  imports: [
    BrowserAnimationsModule,
    // BrowserModule,
    // NoopAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    HttpClient,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
