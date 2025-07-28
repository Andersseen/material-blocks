import { Routes } from '@angular/router';

const sectionRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./page'),
    children: [
      {
        path: 'heroes',
        children: [
          { path: '', loadComponent: () => import('./heroes') },
          {
            path: ':id',
            loadComponent: () => import('./block'),
          },
        ],
      },
      {
        path: 'features',
        children: [
          { path: '', loadComponent: () => import('./features') },
          {
            path: ':id',
            loadComponent: () => import('./block'),
          },
        ],
      },
      {
        path: 'pricing',
        children: [
          { path: '', loadComponent: () => import('./pricing') },
          {
            path: ':id',
            loadComponent: () => import('./block'),
          },
        ],
      },
    ],
  },
];

export default sectionRoutes;
