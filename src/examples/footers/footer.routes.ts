import { Routes } from '@angular/router';

const footerRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '1', loadComponent: () => import('@examples/footers/footer-1') },
      { path: '2', loadComponent: () => import('@examples/footers/footer-2') },
      { path: '3', loadComponent: () => import('@examples/footers/footer-3') },
      { path: '4', loadComponent: () => import('@examples/footers/footer-4') },
    ],
  },
];

export default footerRoutes;
