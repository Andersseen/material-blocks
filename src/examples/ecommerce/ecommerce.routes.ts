import { Routes } from '@angular/router';

const ecommerceRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '1', loadComponent: () => import('@examples/ecommerce/ecommerce-1') },
      { path: '2', loadComponent: () => import('@examples/ecommerce/ecommerce-2') },
      { path: '3', loadComponent: () => import('@examples/ecommerce/ecommerce-3') },
      { path: '4', loadComponent: () => import('@examples/ecommerce/ecommerce-4') },
    ],
  },
];

export default ecommerceRoutes;
