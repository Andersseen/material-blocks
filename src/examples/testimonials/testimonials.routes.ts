import { Routes } from '@angular/router';

const pricingRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '1',
        loadComponent: () => import('@examples/testimonials/testimonial-1'),
      },
      {
        path: '2',
        loadComponent: () => import('@examples/testimonials/testimonial-2'),
      },
      {
        path: '3',
        loadComponent: () => import('@examples/testimonials/testimonial-3'),
      },
      {
        path: '4',
        loadComponent: () => import('@examples/testimonials/testimonial-4'),
      },
    ],
  },
];
export default pricingRoutes;
