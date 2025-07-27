import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'hero',
    children: [
      {
        path: '1',
        loadComponent: () => import('@examples/heroes/hero-1'),
      },
      {
        path: '2',
        loadComponent: () => import('@examples/heroes/hero-2'),
      },
      {
        path: '3',
        loadComponent: () => import('@examples/heroes/hero-3'),
      },
      {
        path: '4',
        loadComponent: () => import('@examples/heroes/hero-4'),
      },
    ],
  },
  {
    path: 'features',
    children: [
      {
        path: '1',
        loadComponent: () => import('@examples/features/features-1'),
      },
    ],
  },
  {
    path: 'pricing',
    children: [
      {
        path: '1',
        loadComponent: () => import('@examples/pricing/pricing-1'),
      },
    ],
  },
];

export default routes;
