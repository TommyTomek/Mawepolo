import { Routes } from '@angular/router';
import { discoverVenetoRoutes } from './pages/discoverVeneto.routes';

export const routes: Routes = [
  ...discoverVenetoRoutes,

  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.HomePage)
  },

  {
    path: '**',
    redirectTo: ''
  }
];
