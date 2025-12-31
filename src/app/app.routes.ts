import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { discoverVenetoRoutes } from './pages/discoverVeneto.routes';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      ...discoverVenetoRoutes,

      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home').then(m => m.HomePage)
      }
    ]
  },

  {
    path: '**',
    redirectTo: ''
  }
];
