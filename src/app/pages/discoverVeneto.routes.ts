import { Routes } from '@angular/router';

export const discoverVenetoRoutes: Routes = [
  {
    path: 'discoverVeneto/history',
    loadComponent: () =>
      import('./discoverVeneto/history/history').then(m => m.HistoryPage)
  }
];
