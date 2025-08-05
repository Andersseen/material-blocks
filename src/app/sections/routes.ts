import { Routes } from '@angular/router';

const sectionRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./page'),
    children: [
      {
        path: 'heroes',
        loadChildren: () => import('./heroes/routes'),
      },
      {
        path: 'features',
        loadChildren: () => import('./features/routes'),
      },
      {
        path: 'forms',
        loadChildren: () => import('./forms/routes'),
      },
      {
        path: 'pricing',
        loadChildren: () => import('./pricing/routes'),
      },
      {
        path: 'ecommerce',
        loadChildren: () => import('./ecommerce/routes'),
      },
      {
        path: 'testimonials',
        loadChildren: () => import('./testimonials/routes'),
      },
      {
        path: 'team',
        loadChildren: () => import('./team/routes'),
      },
      {
        path: 'blog',
        loadChildren: () => import('./blog/routes'),
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/routes'),
      },
      {
        path: 'navigation',
        loadChildren: () => import('./navigation/routes'),
      },
      {
        path: 'footers',
        loadChildren: () => import('./footers/routes'),
      },
      {
        path: 'stats',
        loadChildren: () => import('./stats/routes'),
      },
    ],
  },
];

export default sectionRoutes;
