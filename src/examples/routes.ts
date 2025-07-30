import { Routes } from '@angular/router';

const examplesRoutes: Routes = [
  {
    path: 'hero',
    loadChildren: () => import('./heroes/hero.routes'),
  },
  {
    path: 'features',
    loadChildren: () => import('./features/features.routes'),
  },
  {
    path: 'pricing',
    loadChildren: () => import('./pricing/pricing.routes'),
  },
  {
    path: 'testimonials',
    loadChildren: () => import('./testimonials/testimonials.routes'),
  },
];

export default examplesRoutes;
