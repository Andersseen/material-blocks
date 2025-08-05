import { Routes } from '@angular/router';

const contactRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '1', loadComponent: () => import('@examples/contact/contact-1') },
      { path: '2', loadComponent: () => import('@examples/contact/contact-2') },
      { path: '3', loadComponent: () => import('@examples/contact/contact-3') },
      { path: '4', loadComponent: () => import('@examples/contact/contact-4') },
    ],
  },
];
export default contactRoutes;
