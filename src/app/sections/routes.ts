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
        path: 'pricing',
        loadChildren: () => import('./pricing/routes'),
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
    ],
  },
];

export default sectionRoutes;
