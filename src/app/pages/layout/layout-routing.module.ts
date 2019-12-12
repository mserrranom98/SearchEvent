import { Routes } from '@angular/router';


export const LayoutRoutes: Routes = [
  { path: 'cuentas', loadChildren: './pages/content/cuentas/cuentas.module#CuentasModule' },
  { path: 'empresa', loadChildren: './pages/content/empresa/empresa.module#EmpresaModule' },
  { path: 'establecimientos', loadChildren: './pages/content/establecimientos/establecimientos.module#EstablecimientosModule' },
  { path: 'eventos', loadChildren: './pages/content/eventos/eventos.module#EventosModule' },
  { path: 'actividades', loadChildren: './pages/content/actividades/actividades.module#ActividadesModule' },
  { path: 'agenda', loadChildren: './pages/content/agenda/agenda.module#AgendaModule' },
  { path: 'estadisticas', loadChildren: './pages/content/estadisticas/estadisticas.module#EstadisticasModule' },
  { path: 'inicio', loadChildren: './pages/content/inicio/inicio.module#InicioModule' },
  { path: 'registro-entrada', loadChildren: './pages/content/registro-entrada/registro-entrada.module#RegistroEntradaModule' },
  { path: 'actividades-trabajador', loadChildren: './pages/content/actividades-trabajador/actividades-trabajador.module#ActividadesTrabajadorModule' }
];
