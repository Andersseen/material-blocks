import { Routes } from '@angular/router';

const formsRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '1', loadComponent: () => import('@examples/forms/forms-1') },
      { path: '2', loadComponent: () => import('@examples/forms/forms-2') },
      { path: '3', loadComponent: () => import('@examples/forms/forms-3') },
      { path: '4', loadComponent: () => import('@examples/forms/forms-4') },
    ],
  },
];
export default formsRoutes;
