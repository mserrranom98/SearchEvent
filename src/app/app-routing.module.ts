import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SesionComponent} from './pages/layout/sesion/sesion.component';
import {MainComponent} from './pages/layout/main/main.component';
import {AuthGuardService} from './shared/services/auth/auth-guard.service';
import {LayoutRoutes} from './pages/layout/layout-routing.module';


const routes: Routes = [
  { path: 'login', component: SesionComponent, data: { title: 'Login' } },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '', component: MainComponent, data: { title: 'Main' }, children: LayoutRoutes, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
