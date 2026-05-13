import { Routes } from '@angular/router';

export const routes: Routes = [
  // OLD
  // {
  //   path: 'home',
  //   loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  // },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  // },
  //
  // NEW
  {
    path: '',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];
