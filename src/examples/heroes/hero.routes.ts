import { Routes } from '@angular/router';

const heroRoutes: Routes = [
  {
    path: '',
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
];
export default heroRoutes;
