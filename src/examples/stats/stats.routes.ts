import { Routes } from '@angular/router';

const statsRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '1', loadComponent: () => import('@examples/stats/stats-1') },
      { path: '2', loadComponent: () => import('@examples/stats/stats-2') },
      { path: '3', loadComponent: () => import('@examples/stats/stats-3') },
      { path: '4', loadComponent: () => import('@examples/stats/stats-4') },
    ],
  },
];

export default statsRoutes;
