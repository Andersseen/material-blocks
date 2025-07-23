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
            loadComponent: () => import('./heroes/block'),
          },
        ],
      },
      {
        path: 'features',
        children: [
          { path: '', loadComponent: () => import('./features') },
          {
            path: ':id',
            loadComponent: () => import('./heroes/block'),
          },
        ],
      },
    ],
  },
];

export default sectionRoutes;
