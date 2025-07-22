import { Routes } from '@angular/router';

const sectionRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./page'),
  },
];

export default sectionRoutes;
