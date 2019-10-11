import { Routes } from '@angular/router';


export const LayoutRoutes: Routes = [
  { path: 'cuentas', loadChildren: '/app/pages/content/cuentas/cuentas.module#CuentasModule' },
  { path: 'establecimientos', loadChildren: 'app/pages/content/content.module#ContentModule' },
  { path: 'empresa', loadChildren: 'app/pages/content/content.module#ContentModule'}
];
