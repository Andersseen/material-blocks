import { Routes } from '@angular/router';

const featuresRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '1',
        loadComponent: () => import('@examples/features/features-1'),
      },
      {
        path: '2',
        loadComponent: () => import('@examples/features/features-2'),
      },
      {
        path: '3',
        loadComponent: () => import('@examples/features/features-3'),
      },
      {
        path: '4',
        loadComponent: () => import('@examples/features/features-4'),
      },
    ],
  },
];
export default featuresRoutes;
