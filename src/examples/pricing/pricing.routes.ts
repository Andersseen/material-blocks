import { Routes } from '@angular/router';

const pricingRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '1',
        loadComponent: () => import('@examples/pricing/pricing-1'),
      },
      {
        path: '2',
        loadComponent: () => import('@examples/pricing/pricing-2'),
      },
      {
        path: '3',
        loadComponent: () => import('@examples/pricing/pricing-3'),
      },
      {
        path: '4',
        loadComponent: () => import('@examples/pricing/pricing-4'),
      },
    ],
  },
];
export default pricingRoutes;
