import { Routes } from '@angular/router';

const route: Routes = [
  { path: '', loadComponent: () => import('.') },
  {
    path: ':id',
    loadComponent: () => import('../block'),
    data: { path: 'testimonials' },
  },
];

export default route;
