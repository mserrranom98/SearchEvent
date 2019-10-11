import { Routes } from '@angular/router';


export const LayoutRoutes: Routes = [
  { path: 'cuentas', loadChildren: './pages/content/cuentas/cuentas.module#CuentasModule' }
];
