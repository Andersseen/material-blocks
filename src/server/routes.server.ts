import { PrerenderFallback, RenderMode, ServerRoute } from '@angular/ssr';

const dynamicIds = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }];

const sectionPaths = [
  'heroes',
  'features',
  'forms',
  'pricing',
  'testimonials',
  'team',
  'contact',
  'footers',
  'navigation',
  'stats',
  'blog',
  'ecommerce',
];

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Client,
  },
  ...sectionPaths.map<ServerRoute>((section) => ({
    path: `sections/${section}/:id`,
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
      return dynamicIds;
    },
  })),
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
