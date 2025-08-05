import { Routes } from '@angular/router';

const navigationRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '1', loadComponent: () => import('@examples/navigation/navigation-1') },
      { path: '2', loadComponent: () => import('@examples/navigation/navigation-2') },
      { path: '3', loadComponent: () => import('@examples/navigation/navigation-3') },
      { path: '4', loadComponent: () => import('@examples/navigation/navigation-4') },
    ],
  },
];

export default navigationRoutes;
