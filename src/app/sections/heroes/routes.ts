import { Routes } from '@angular/router';

const route: Routes = [
  { path: '', loadComponent: () => import('.') },
  {
    path: ':id',
    loadComponent: () => import('../block'),
    data: { path: 'heroes' },
  },
];

export default route;
