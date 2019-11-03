import { Routes } from '@angular/router';


export const LayoutRoutes: Routes = [
  { path: 'cuentas', loadChildren: './pages/content/cuentas/cuentas.module#CuentasModule' },
  { path: 'empresa', loadChildren: './pages/content/empresa/empresa.module#EmpresaModule' },
  { path: 'establecimientos', loadChildren: './pages/content/establecimientos/establecimientos.module#EstablecimientosModule' }
];
