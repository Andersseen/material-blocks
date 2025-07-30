import { Routes } from '@angular/router';

const teamRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '1',
        loadComponent: () => import('@examples/team/team-1'),
      },
      {
        path: '2',
        loadComponent: () => import('@examples/team/team-2'),
      },
      {
        path: '3',
        loadComponent: () => import('@examples/team/team-3'),
      },
      {
        path: '4',
        loadComponent: () => import('@examples/team/team-4'),
      },
    ],
  },
];
export default teamRoutes;
