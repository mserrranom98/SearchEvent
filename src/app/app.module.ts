import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MainComponent} from './pages/layout/main/main.component';
import {SesionComponent} from './pages/layout/sesion/sesion.component';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SesionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
