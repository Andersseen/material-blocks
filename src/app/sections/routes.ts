import { Routes } from '@angular/router';

const sectionRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./page'),
    children: [{ path: 'heroes', loadComponent: () => import('./heroes') }],
  },
];

export default sectionRoutes;
