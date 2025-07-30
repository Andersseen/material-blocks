import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'hero',
    children: [
      {
        path: '1',
        loadComponent: () => import('@examples/heroes/hero-1'),
      },
      {
        path: '2',
        loadComponent: () => import('@examples/heroes/hero-2'),
      },
      {
        path: '3',
        loadComponent: () => import('@examples/heroes/hero-3'),
      },
      {
        path: '4',
        loadComponent: () => import('@examples/heroes/hero-4'),
      },
    ],
  },
  {
    path: 'features',
    children: [
      {
        path: '1',
        loadComponent: () => import('@examples/features/features-1'),
      },
      {
        path: '2',
        loadComponent: () => import('@examples/features/features-2'),
      },
      {
        path: '3',
        loadComponent: () => import('@examples/features/features-3'),
      },
      {
        path: '4',
        loadComponent: () => import('@examples/features/features-4'),
      },
    ],
  },
  {
    path: 'pricing',
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
  {
    path: 'testimonials',
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

export default routes;
