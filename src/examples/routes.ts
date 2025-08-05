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
  {
    path: 'team',
    loadChildren: () => import('./team/team.routes'),
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.routes'),
  },
  {
    path: 'navigation',
    loadChildren: () => import('./navigation/navigation.routes'),
  },
  {
    path: 'footer',
    loadChildren: () => import('./footers/footer.routes'),
  },
];

export default examplesRoutes;
